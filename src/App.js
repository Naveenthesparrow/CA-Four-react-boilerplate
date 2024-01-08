import React, { useState } from "react";
import "./App.css";
import UseContext from "./components/Toggle";
export const ToggleTheme = React.createContext();

function App() {
  // Define the state using the useState hook
  const [state, setState] = useState(true);
  /**
   * Handle the toggle button click event.
   * It updates the state by toggling its value.
   */
  const handleToggle = () => {
    setState((state) => !state);
  };
  // Render the JSX
  return (
    <ToggleTheme.Provider value={state}>
      <div className={state ? "light-theme" : "dark-theme"}>
        <h2 className="logo">Kalvium</h2>
        <button className="toggle" onClick={handleToggle}>
          {state ? "Light" : "Dark"}
        </button>
        <UseContext />
      </div>
    </ToggleTheme.Provider>
  );
}

export default App;
