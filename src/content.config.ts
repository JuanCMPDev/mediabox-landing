import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'getting-started',
      'configuration',
      'deployment',
      'tools',
      'integrations',
      'reference',
    ]),
    order: z.number(),
    locale: z.enum(['en', 'es']),
    lastUpdated: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { docs };
