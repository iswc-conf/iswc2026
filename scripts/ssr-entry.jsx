/**
 * Entry point for the route smoke test (scripts/smoke-test.mjs).
 * Not part of the shipped site.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App.jsx";
import navigation from "../src/data/navigation.js";

export function renderRoute(path) {
  return renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  );
}

/** Every internal route reachable from the navbar. */
export const routes = navigation
  .flatMap((entry) => (entry.items ? entry.items : [entry]))
  .filter((item) => item.to && !item.to.startsWith("http"))
  .map((item) => item.to);
