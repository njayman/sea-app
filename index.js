import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { env } from "hono/adapter";

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

const port = parseInt(PORT) || 1337;

serve({ fetch: app.fetch, port });
