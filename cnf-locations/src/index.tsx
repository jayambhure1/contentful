import { createRoot } from "react-dom/client";
import { GlobalStyles } from "@contentful/f36-components";

import { SDKProvider } from "@contentful/react-apps-toolkit";

import App from "./App";
import LocalhostWarning from "./components/LocalhostWarning";

// Find the app mount point defined in index.html.
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container missing in index.html");
}

// Create the React root once and reuse it for all render paths.
const root = createRoot(container);

// When the app is opened directly in the browser, show the localhost warning.
if (window.self === window.top) {
  root.render(
    <>
      // Apply global styles to the app.
      <GlobalStyles />
      // Render the localhost warning component.
      <LocalhostWarning />
    </>,
  );
} else {
  // Inside Contentful, provide the SDK context to all child components.
  root.render(
    // Provide the SDK context to all child components.
    <SDKProvider>
      {/* Apply global styles to the app. */}
      <GlobalStyles />
      {/* Render the main app component. */}
      <App />
    </SDKProvider>,
  );
}
