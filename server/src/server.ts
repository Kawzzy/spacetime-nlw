import "dotenv/config";

import { fastify } from "fastify";
import { authRoutes } from "./routes/auth";
import { memoriesRoutes } from "./routes/memories";
// cors determines witch URLs can do requests to our backend
import cors from "@fastify/cors";

// create the application
const app = fastify();

// register routes from separated files
app.register(cors, {
  origin: true, // this allows all the frontend requests
});
app.register(authRoutes);
app.register(memoriesRoutes);

// start the HTTP server
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running on http://localhost:3333");
  });
