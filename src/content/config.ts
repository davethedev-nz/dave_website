import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    role: z.string(),
    tech: z.array(z.string()),
    date: z.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'case-studies': caseStudiesCollection,
};
