import cors from "cors";
import express from "express";
import { initRoutes } from "./routes/routes.js";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

import "./config/db.js";

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.static(join(__dirname, "client", "build")));

initRoutes(app);

const port = 3050;
app.listen(port, () => {});

export { app };
