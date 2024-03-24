import { useEffect, useState } from "react";
import { TSmarketsEvent } from "../constants/types";
import Event from "./Event";
import { useSelectorContext } from "../context/selectorContext";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState<TSmarketsEvent[]>([]);
  const [pagination, setPagination] = useState<string | undefined>(undefined);
  const { selection } = useSelectorContext();

  useEffect(() => {
    // fetch events for the current selection
    const getEvents = async () => {
      try {
        const url = `https://api.smarkets.com/v3/events/?state=upcoming&state=live&type=${selection}_match&sort=display_order%2Cstart_datetime%2Cid&limit=48&include_hidden=false`;
        const res = await axios.get(
          `https://cors-anywhere.herokuapp.com/${url}`
        );
        const data = res.data;
        const events = data.events as TSmarketsEvent[];
        setEvents(() => events);
        setPagination(() => data.pagination.next_page);
      } catch (error) {
        console.error(error);
      }
    };

    getEvents();
  }, [selection]);

  const addNextPages = async () => {
    // add pages to the end of the list as the user scrolls
    try {
      if (typeof pagination === "string") {
        const res = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events/${pagination}`
        );
        const data = await res.data;
        const events = data.events as TSmarketsEvent[];
        setEvents((prev) => [...prev, ...events]);
        setPagination(() => data.pagination.nextPage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      // paginate next page of values
      addNextPages();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pagination, events]);

  return (
    <section className="grid grid-cols-1 gap-2 pt-14 px-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {events.map((event, idx) => (
        <Event key={`${idx}-${event.id}`} event={event} />
      ))}
    </section>
  );
};

export default EventList;
