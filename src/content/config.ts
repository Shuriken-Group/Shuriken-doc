import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lang: z.enum(['rust', 'python', 'cpp']).optional(),
  }),
});

export const collections = {
  docs,
};
