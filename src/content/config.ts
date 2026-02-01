import { defineCollection, z } from 'astro:content';

const projets = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    // ON AJOUTE CES DEUX LIGNES :
    serie: z.string().optional(), // .optional() car tous les projets n'ont pas de série
    category: z.enum(['pfsense', 'windows', 'zabbix', 'linux']).optional(),
  }),
});

export const collections = { projets };