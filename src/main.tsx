import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SelectorContextProvider } from "./context/selectorContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SelectorContextProvider>
      <App />
    </SelectorContextProvider>
  </React.StrictMode>
);
