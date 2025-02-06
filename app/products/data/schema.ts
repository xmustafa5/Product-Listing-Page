import { z } from "zod"

export const productSchema = z.object({
  name: z.string(),
  SKU: z.string(),
  quantity: z.number(),
  stockStatus: z.string(),
  category: z.string(),
})

export type Product = z.infer<typeof productSchema>
