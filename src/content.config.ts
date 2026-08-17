import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	work: defineCollection({
		loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
		schema: z.object({
			title: z.string(),
			subtitle: z.string(),
			description: z.string(),
			order: z.number(),
			tags: z.array(z.string()),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
};
