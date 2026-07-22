/**
 * Renders every navbar route server-side and reports any that throw or come
 * back suspiciously empty.
 *
 * Run with `npm run smoke`. Catches broken imports, bad component props and
 * malformed data files that a plain `vite build` cannot see, because those
 * only surface when a component actually renders.
 */
import { execSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import path from "node:path";

const OUT = path.resolve("node_modules/.smoke/ssr-entry.js");
const MIN_TEXT_CHARS = 150;

execSync("npx vite build --config vite.ssr.config.js --logLevel error", {
  stdio: "inherit",
});

const app = await import(pathToFileURL(OUT).href);
const routes = ["/", ...app.routes];

// React.lazy resolves asynchronously, so warm the dynamic imports first.
for (const route of routes) {
  try {
    app.renderRoute(route);
  } catch {
    /* expected on the warm-up pass */
  }
}
await new Promise((resolve) => setTimeout(resolve, 2000));

let failed = 0;
let thin = 0;

for (const route of routes) {
  try {
    const text = app
      .renderRoute(route)
      .replace(/<[^>]+>/g, " ")
      .trim();

    if (text.length < MIN_TEXT_CHARS) {
      thin++;
      console.log(`  thin  ${route}  (${text.length} chars — image-only page?)`);
    } else {
      console.log(`  ok    ${route}`);
    }
  } catch (error) {
    failed++;
    console.log(`  FAIL  ${route}\n        ${error.message.split("\n")[0]}`);
  }
}

console.log(
  `\n${routes.length - failed}/${routes.length} routes rendered` +
    (thin ? `, ${thin} thin` : "")
);

process.exit(failed > 0 ? 1 : 0);
