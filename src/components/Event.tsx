import { ReactNode } from "react";
import { TSmarketsEvent } from "../constants/types";
import { capitalizeFirstLetter } from "../constants/functions";

const Event = ({ event }: { event: TSmarketsEvent }) => {
  const processSlug = (slug: string): ReactNode => {
    const parts = slug.split("/").slice(1, -1); // Split and remove the first and last empty strings
    const processedParts = parts.map((part) => part.replace(/-/g, " ")); // Replace hyphens with spaces
    return (
      <div className="flex gap-1 mb-1 text-green-500">
        <div>{capitalizeFirstLetter(processedParts[1])}</div>
        <div className="text-white">{">"}</div>
        <div>{capitalizeFirstLetter(processedParts[2])}</div>
      </div>
    );
  };

  return (
    <div className="bg-gray-800 p-2 px-3 w-full text-xs min-h-32 flex flex-col justify-between hover:bg-gray-700 cursor-pointer">
      <div>
        {processSlug(event.full_slug)}
        <div>{event.name}</div>
      </div>

      {/* win and loss % - maybe draw too */}
      <div className="flex gap-2">
        <div className="p-2 bg-green-500">3.5</div>
        <div className="p-2 bg-blue-500">6.5</div>
      </div>

      {/* Time till start, live and time gone by, finished
        amount traded in total */}
      <div>
        <hr className="border-gray-400 mb-1" />
        <div className="flex justify-between">
          <div>{event.state}</div>
          <div>{`TRADED: $71,907`}</div>
        </div>
      </div>
    </div>
  );
};

export default Event;
