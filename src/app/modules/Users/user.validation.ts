import { z } from "zod";

export const registrationValidationSchema = z.object({
  body: z.object({
  email:z.string(),
  name:z.string(),
  password:z.string()
  }),
});