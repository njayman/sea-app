import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { env } from "hono/adapter";
import { argv } from "node:process";
import { log } from "node:console";

const app = new Hono();

app
  .get("/", (c) => {
    return c.text("Hello world");
  })
  .post("/", (c) => {
    const queries = JSON.stringify(c.req.query(), null, 2);
    return c.text(queries);
  });

const { PORT } = env();

let port = parseInt(PORT) || 1337;

argv.forEach((arg, index) => {
  if (arg === "--port" && Boolean(argv[index + 1])) {
    port = parseInt(argv[index + 1]);
  }
});

serve({ fetch: app.fetch, port }, (info) =>
  log(`Listening on port: ${info.port}`),
);
