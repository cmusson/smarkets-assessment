import { ReactNode } from "react";
import { useSelectorContext } from "../context/selectorContext";
import { TSelections } from "../constants/types";
import { capitalizeFirstLetter } from "../constants/functions";

interface ISelectorProps {
  children: ReactNode;
}

const Selector = ({ children }: ISelectorProps) => {
  const { selection, updateSelection } = useSelectorContext();

  const styling =
    selection === children
      ? "bg-green-400 text-black pointer-none"
      : "bg-transparent text-white hover:bg-green-900";

  return (
    <button
      disabled={selection === children ? true : false}
      className={`p-1 text-xs sm:text-md ${styling}`}
      onClick={() => updateSelection(children as TSelections)}
    >
      {capitalizeFirstLetter(children as string)}
    </button>
  );
};

export default Selector;
