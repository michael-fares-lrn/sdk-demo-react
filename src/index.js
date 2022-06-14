import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App"

// =========================
// Get default config
// =========================
const appConfig = JSON.parse(document.querySelector('#main-script').getAttribute('data-parameters'));

// New React Methods (createRoot instead of reactDom.render)

const root = createRoot(document.getElementById('root')); 

root.render(<App config={appConfig} />);