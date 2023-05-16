import { PrismaClient } from "@prisma/client";
import { fastify } from "fastify";

// create the application
const app = fastify();

// create connection with the db
const prisma = new PrismaClient();

// create a get route
app.get("/users", async () => {
  const users = await prisma.user.findMany();

  return users;
});

// start the HTTP server
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running on http://localhost:3333");
  });
