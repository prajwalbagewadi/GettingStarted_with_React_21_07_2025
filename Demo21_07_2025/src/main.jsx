// Import StrictMode from React to help identify potential issues during development
import { StrictMode } from "react";

// Import createRoot from react-dom/client (React 18+) to render the app
import { createRoot } from "react-dom/client";

// Import the main App(name) component from the Home.jsx file
import Home from "./Home.jsx";

// Create a root to control the rendering inside the HTML element with id "root"
createRoot(document.getElementById("root")).render(
  // Use StrictMode to wrap the app for highlighting potential problems (only in development)
  <StrictMode>
    {/* Render the main App component */}
    <Home />
  </StrictMode>
);
