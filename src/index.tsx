import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import { TagProvider } from "./Tags/TagContext";

const rootElement = document.getElementById("root");
const root = rootElement && ReactDOMClient.createRoot(rootElement);

root &&
  root.render(
    <StrictMode>
      <TagProvider>
        <App />
      </TagProvider>
    </StrictMode>
  );
