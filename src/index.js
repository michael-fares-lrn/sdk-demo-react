import React from "react";
import reactDom from "react-dom";
import App from "./App"

// =========================
// Get default config
// =========================
const appConfig = JSON.parse(document.querySelector('#main-script').getAttribute('data-parameters'));

reactDom.render(<App config={appConfig} />, document.getElementById("root"));