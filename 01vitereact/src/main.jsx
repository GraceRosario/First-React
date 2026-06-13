import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import Chai from "./Chai.jsx";

const anotheruser = "chai aur react";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotheruser
);

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
      <Chai />
      {anotherElement},
      {reactElement}
    </>
  </StrictMode>,
);
