import { string } from "astro/zod";
import { z, defineCollection } from "astro:content";
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string().default('Anónimo'),
        date: z.date(),
        description: z.string(),
        image: z.string().optional(),
        // image: z.object({
        //     url: string(),
        //     alt: string()
        // }).optional(),
    })
})

export const collections = {
    'blog': blogCollection
}