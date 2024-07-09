import { z } from "zod";

export const productsValidation = z.object({
  body: z.object({
    name: z.string(),
    image: z.string(),
    price: z.number(),
    quantity: z.number(),
    section: z.string(),
    categories: z.array(z.string()),
  }),
});
