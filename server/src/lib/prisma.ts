import { PrismaClient } from "@prisma/client";

// create connection with the db
export const prisma = new PrismaClient({
  log: ["query"],
});
