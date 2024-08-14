import { z } from "zod";

const envSchema = z.object({
  apiBaseUrl: z.string().url(),
});

const envSafeParse = envSchema.safeParse({
  apiBaseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
});

if (!envSafeParse.success) {
  throw new Error("There is an error with the server environment variables");
}

export default envSafeParse.data;
