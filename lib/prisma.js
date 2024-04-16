import { PrismaClient } from "@prisma/client";

const prisma = globalThis.prisma ?? new PrismaClient();

// If not in production, assign the prisma instance to the globalThis object
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;
