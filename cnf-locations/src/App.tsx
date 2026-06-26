import { locations } from "@contentful/app-sdk";
import { useMemo } from "react";
import Page from "./locations/Page";
import Home from "./locations/Home";
import { useSDK } from "@contentful/react-apps-toolkit";

const ComponentLocationSettings: Record<string, React.ComponentType> = {
  // [locations.LOCATION_ENTRY_FIELD]: () => <div>Entry Field</div>,
  // [locations.LOCATION_ENTRY_SIDEBAR]: () => <div>Entry Sidebar</div>,
  // [locations.LOCATION_ENTRY_EDITOR]: () => <div>Entry Editor</div>,
  // [locations.LOCATION_DIALOG]: () => <div>Dialog</div>,
  [locations.LOCATION_PAGE]: Page,
  [locations.LOCATION_HOME]: Home,
  
};


const App = () => {
  const sdk = useSDK(); // Assuming sdk is passed as a prop to the App component

  const Component = useMemo(() => {
    for (const [location, component] of Object.entries(
      ComponentLocationSettings,
    )) {
      if (sdk.location.is(location)) {
        return component;
      }
    }
    return () => <div>Unknown location</div>;
  }, [sdk.location]);

  return Component ? <Component /> : null;
};

export default App;
