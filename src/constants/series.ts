// --- SÉRIE 1 : FONDATIONS & HARDENING ---
export const WIN_INFRA_CORE = [
  { label: "Virtualisation Server 2022", href: "/projets/vmware-setup" },
  { label: "Promotion du Domaine AD DS", href: "/projets/promotion-domaine" },
  { label: "Comptes de secours (Break-Glass)", href: "/projets/break-glass-account" }, 
  { label: "Audit PingCastle", href: "/projets/audit-pingcastle" },
];

// --- SÉRIE 2 : SÉCURITÉ AVANCÉE DES IDENTITÉS ---
export const WIN_IDENTITY_PRO = [
  { label: "DNS : Résolution Inverse", href: "/projets/dns" }, 
  { label: "PKI : Déploiement AD CS", href: "/projets/ad-cs" },
  { label: "LDAPS : Chiffrement d'annuaire", href: "/projets/ldaps" },
  { label: "Lier un client au domaine", href: "/projets/client-domaine" }, 
];

// --- SÉRIE 3 : CONTINUITÉ D'ACTIVITÉ (PRA/PCA) ---
// La stratégie de sauvegarde 3-2-1-1-0
export const WIN_BACKUP_STRATEGY = [
  { label: "Sauvegarde 3-2-1-1-0 (Veeam/Windows)", href: "/projets/backup-strategy" }, 
  { label: "Réplication & Failover : Haute Disponibilité", href: "/projets/veeam-replication" },
];

// --- SÉRIE 4 : GOUVERNANCE & GESTION DES RESSOURCES ---
// Organisation de l'annuaire et des données
export const WIN_ADMIN_GOV = [
  { label: "Structure OU & Automatisation PS", href: "/projets/powershell-ou" },
  { label: "Modèle AGDLP : Groupes & Rôles", href: "/projets/agdlp-identites" },
  { label: "DFS & Permissions NTFS", href: "/projets/partages-fichiers" }
];

// --- SÉRIE 5 : GESTION DU PARC CLIENT ---
// Postes de travail et conformité globale
export const WIN_CLIENT_SECURITY = [
  { label: "Intégration & Tests Clients", href: "/projets/tests-clients" },
  { label: "Mappage & Profils par GPO", href: "/projets/gpo-mappage" },
  { label: "BitLocker (Sans TPM)", href: "/projets/bitlocker-lab" }
];

// --- SÉRIE 6 : RÉSEAU & PÉRIMÈTRE (PFSENSE) ---
export const PFSENSE = [
  { label: "Installation & WAN/LAN", href: "/projets/pfsense-install" },
  { label: "VLANs & Segmentation", href: "/projets/pfsense-vlans" },
  { label: "VPN IPsec Site-à-Site", href: "/projets/pfsense-vpn" }
];

// --- Série 7 Supervision et Monitoring ---
export const MONITORING_OPS = [
  { label: "Zabbix : Installation & Dashboard", href: "/projets/zabbix-setup" },
  { label: "SNMP & Agents (Windows/Linux)", href: "/projets/zabbix-agents" },
  { label: "Alerting Slack/Mail & Seuils", href: "/projets/zabbix-alerting" },
];

export const ITSM_INVENTORY = [
  { label: "GLPI : Inventaire automatisé (Fusion)", href: "/projets/glpi-fusion" },
  { label: "Gestion des Tickets & SLA", href: "/projets/glpi-ticketing" },
  { label: "Base de Connaissances & Actifs", href: "/projets/glpi-kb" },
];

export const STORAGE_BACKUP = [
  { label: "RAID & Configuration NAS (TrueNAS/Synology)", href: "/projets/nas-config" },
  { label: "Acronis : Sauvegarde Cloud & Immuabilité", href: "/projets/acronis-backup" },
  { label: "Récupération après Sinistre (Bare Metal)", href: "/projets/disaster-recovery" },
];