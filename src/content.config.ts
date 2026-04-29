import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── Articles (anciennement "projets") ──────────────────────────────────────
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    slug: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: image().optional(),
    serie: z.enum([
      'firewalling-edge',
      'architecture-ad',
      'identity-security',
      'governance-access',
      'file-services',
      'client-security',
      'nextcloud',
      'glpi',
      'monitoring-logging',
      'backup-resilience',
      'network-security',
    ]).optional(),
    category: z.enum([
      'windows-server', 'windows-client', 'linux',
      'opnsense', 'pfsense', 'zabbix', 'graylog',
      'nextcloud', 'glpi', 'veeam', 'cisco',
    ]).optional(),
    serieOrder: z.number().optional(),
    featured: z.boolean().default(false),
  }),
});

// ── Catégories de la page /projets ─────────────────────────────────────────
const categories = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/categories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    color: z.string(),
    order: z.number(),
  }),
});

// ── Labs individuels ───────────────────────────────────────────────────────
const labs = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/labs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    status: z.enum(['active', 'coming-soon']),
    tags: z.array(z.string()).default([]),
    icon: z.string(),
    color: z.string(),
    order: z.number().default(99),
    seriesCount: z.number().default(0),
    articlesCount: z.number().default(0),
  }),
});

export const collections = { articles, categories, labs };