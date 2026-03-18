// src/constants/series.ts

export interface Serie {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const SERIES: Record<string, Serie> = {
  "firewalling-edge": {
    title: "Sécurité Périmétrique avec OPNsense",
    description: "Mise en place de pare-feu haute disponibilité, segmentation réseau, filtrage, et tunnels VPN sécurisés pour le télétravail.",
    icon: "security",
    color: "#e81123"
  },
  "architecture-ad": {
    title: "Architecture Active Directory",
    description: "Conception, déploiement et promotion de contrôleurs de domaine (AD DS). Hardening pré et post promotion, audit global, compte break-glass.",
    icon: "windows",
    color: "#0078d4"
  },
  "identity-security": {
    title: "Sécurité des Identités & PKI",
    description: "Mise en place du DNS, d'autorités de certification (AD CS), chiffrement d'annuaire LDAPS.",
    icon: "windows",
    color: "#0078d4"
  },
  "governance-access": {
    title: "Structure de l'annuaire & Gestion des Accès",
    description: "Structure des OUs, administration via le modèle AGDLP, délégations de contrôle et intégration au domaine.",
    icon: "windows",
    color: "#0078d4"
  },
  "file-services": {
    title: "Services de Fichiers & Stockage",
    description: "Déploiement de serveurs de fichiers (FSRM), gestion des droits NTFS/SMB (AGDLP), mise en place de DFS et stratégies de quotas.",
    icon: "storage",
    color: "#107c10"
  },
  "client-security": {
    title: "Sécurisation des Postes Clients",
    description: "Maîtrise du cycle de vie du poste de travail : masterisation, déploiement par GPO, BitLocker et conformité de sécurité.",
    icon: "windows",
    color: "#0078d4"
  },
  "nextcloud": {
    title: "Nextcloud — Cloud Privé & Partage",
    description: "Déploiement et sécurisation d'un cloud privé auto-hébergé, intégration Active Directory et synchronisation des fichiers utilisateurs.",
    icon: "nextcloud",
    color: "#0082c9"
  },
  "glpi": {
    title: "GLPI — ITSM & Gestion du Parc",
    description: "Installation de GLPI, inventaire automatique via agent, gestion du cycle de vie des incidents et intégration Active Directory.",
    icon: "itsm",
    color: "#42546d"
  },
  "monitoring-logging": {
    title: "Supervision & Analyse de Logs",
    description: "Observabilité complète de l'infrastructure : monitoring temps réel avec Zabbix et centralisation des logs avec Graylog.",
    icon: "monitoring",
    color: "#107c10"
  },
  "backup-resilience": {
    title: "Sauvegarde & Continuité d'Activité",
    description: "Mise en œuvre de solutions Veeam Backup. Application de la règle 3-2-1-1-0 et tests de restauration PRA/PCA.",
    icon: "backup",
    color: "#107c10"
  },
  "network-security": {
    title: "Sécurité Réseau & Commutation Cisco",
    description: "Conception de topologies sous Cisco Packet Tracer. Maîtrise de l'IOS, configuration de VLANs (802.1Q), trunking et routage inter-VLAN.",
    icon: "network",
    color: "#e81123"
  }
};