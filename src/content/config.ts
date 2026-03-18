// src/content/config.ts

import { defineCollection, z } from 'astro:content';

const projets = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    tags: z.array(z.string()).default([]),

    // Utiliser le helper image() permet à Astro d'optimiser les captures d'écran
    image: image().optional(),

    // Clé technique alignée sur src/constants/series.ts
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

    // Catégories techniques
    category: z.enum([
      'windows-server',
      'windows-client',
      'linux',
      'opnsense',
      'pfsense',
      'zabbix',
      'graylog',
      'nextcloud',
      'glpi',
      'veeam',
      'cisco',
    ]).optional(),

    serieOrder: z.number().optional(),

    // Mettre en avant les meilleurs projets TSSR
    featured: z.boolean().default(false),
  }),
});

export const collections = { projets };