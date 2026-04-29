// src/constants/series.ts
export interface Serie {
  title: string;
  description: string;
  icon: string;
  color: string;
  status?: 'active' | 'coming-soon';   
  category?: 'lab-pme' | 'mini-lab';   
}

export const SERIES: Record<string, Serie> = {
  "firewalling-edge": {
    title: "Sécurité Périmétrique avec OPNsense",
    description: "Mise en place de pare-feu haute disponibilité, segmentation réseau, filtrage, et tunnels VPN sécurisés pour le télétravail.",
    icon: "security",
    color: "#e81123",
    status: "active",
    category: "lab-pme"
  },
  "architecture-ad": {
    title: "Architecture Active Directory",
    description: "Conception, déploiement et promotion de contrôleurs de domaine (AD DS). Hardening pré et post promotion, audit global, compte break-glass.",
    icon: "windows",
    color: "#0078d4",
    status: "active",
    category: "lab-pme"
  },
  "identity-security": {
    title: "Sécurité des Identités & PKI",
    description: "Mise en place du DNS, d'autorités de certification (AD CS), chiffrement d'annuaire LDAPS.",
    icon: "windows",
    color: "#0078d4",
    status: "active",
    category: "lab-pme"
  },
  "governance-access": {
    title: "Structure de l'annuaire & Gestion des Accès",
    description: "Structure des OUs, administration via le modèle AGDLP, délégations de contrôle et intégration au domaine.",
    icon: "windows",
    color: "#0078d4",
    status: "active",
    category: "lab-pme"
  },
  "backup-resilience": {
    title: "Sauvegarde & Continuité d'Activité",
    description: "Mise en œuvre de solutions Veeam Backup. Application de la règle 3-2-1-1-0 et tests de restauration PRA/PCA.",
    icon: "backup",
    color: "#107c10",
    status: "active",
    category: "lab-pme"
  },
  "file-services": {
    title: "Services de Fichiers & Stockage",
    description: "Déploiement de serveurs de fichiers (FSRM), gestion des droits NTFS/SMB (AGDLP), mise en place de DFS et stratégies de quotas.",
    icon: "storage",
    color: "#107c10",
    status: "coming-soon",
    category: "lab-pme"
  },
  "client-security": {
    title: "Sécurisation des Postes Clients",
    description: "Maîtrise du cycle de vie du poste de travail : masterisation, déploiement par GPO, BitLocker et conformité de sécurité.",
    icon: "windows",
    color: "#0078d4",
    status: "coming-soon",
    category: "lab-pme"
  },
  "monitoring-logging": {
    title: "Supervision & Analyse de Logs",
    description: "Observabilité complète de l'infrastructure : monitoring temps réel avec Zabbix et centralisation des logs avec Graylog.",
    icon: "monitoring",
    color: "#107c10",
    status: "coming-soon",
    category: "lab-pme"
  },
  "glpi": {
    title: "GLPI — ITSM & Gestion du Parc",
    description: "Installation de GLPI, inventaire automatique via agent, gestion du cycle de vie des incidents et intégration Active Directory.",
    icon: "itsm",
    color: "#42546d",
    status: "coming-soon",
    category: "lab-pme"
  },
  "nextcloud": {
    title: "Nextcloud — Cloud Privé & Partage",
    description: "Déploiement et sécurisation d'un cloud privé auto-hébergé, intégration Active Directory et synchronisation des fichiers utilisateurs.",
    icon: "nextcloud",
    color: "#0082c9",
    status: "coming-soon",
    category: "lab-pme"
  },
  "network-security": {
    title: "Sécurité Réseau & Commutation Cisco",
    description: "Conception de topologies sous Cisco Packet Tracer. Maîtrise de l'IOS, configuration de VLANs (802.1Q), trunking et routage inter-VLAN.",
    icon: "network",
    color: "#e81123",
    status: "coming-soon",
    category: "lab-pme"
  },

  // ── Mini-labs ── ajouter les futures séries ici avec category: "mini-lab"
  // "docker-basics": {
  //   title: "Docker — Premiers conteneurs",
  //   description: "...",
  //   icon: "linux",
  //   color: "#2496ed",
  //   status: "coming-soon",
  //   category: "mini-lab"
  // },
};