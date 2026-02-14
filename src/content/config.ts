import { defineCollection, z } from 'astro:content';
// On pourrait importer les clés de SERIES ici si on voulait être 100% DRY, 
// mais garder l'enum explicite est plus sûr pour le typage d'Astro.

const projets = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({ // On utilise le helper image
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    tags: z.array(z.string()).default([]),

    // Utiliser le helper image() permet à Astro d'optimiser tes captures d'écran
    image: image().optional(), 

    // Clé technique alignée sur src/constants/series.ts
    serie: z.enum([
      'architecture-ad',
      'identity-security',
      'backup-resilience',
      'governance-access',
      'client-security',
      'network-security',
      'monitoring',
      'itsm'
    ]).optional(),

    // Catégories techniques
category: z.enum([
      'windows-server',
      'windows-client', 
      'linux',
      'pfsense',
      'zabbix'
    ]).optional(),
serieOrder: z.number().optional(),    
    // Un petit booléen pour mettre en avant tes meilleurs projets TSSR ?
    featured: z.boolean().default(false),
  }),
});

export const collections = { projets };