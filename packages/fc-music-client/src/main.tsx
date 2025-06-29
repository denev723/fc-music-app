import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

async function enableMocking() {
  // if (import.meta.env.MODE !== "development") {
  //   return;
  // }
  // const { worker } = await import("./__mock__/browser");
  // return worker.start();zx
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
