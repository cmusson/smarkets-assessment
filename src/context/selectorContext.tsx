import { ReactNode, createContext, useContext, useState } from "react";
import { TSelections } from "../constants/types";

type TSelectorContext = {
  selection: string;
  updateSelection: (selection: TSelections) => void;
};

const SelectorContext = createContext<TSelectorContext>({
  selection: "football",
  updateSelection: () => {},
});

export const useSelectorContext = () => useContext(SelectorContext);

export const SelectorContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selection, setSelection] = useState<TSelections>("football");
  const updateSelection = (slct: TSelections) => {
    setSelection(slct);
  };

  return (
    <SelectorContext.Provider value={{ selection, updateSelection }}>
      {children}
    </SelectorContext.Provider>
  );
};
