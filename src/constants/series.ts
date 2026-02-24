// src/constants/series.ts

export interface Serie {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const SERIES: Record<string, Serie> = {
  "architecture-ad": {
    title: "Architecture Active Directory",
    description: "Conception, déploiement et promotion de contrôleurs de domaine (AD DS). Hardening pré et post promotion, Audit global. Compte break-glass.",
    icon: "windows",
    color: "#0078d4"
  },
"identity-security": {
    title: "Sécurité des Identités & PKI",
    description: "Mise en place du DNS, d'autorités de certification (AD CS), chiffrement d'annuaire LDAPS.",
    icon: "windows",
    color: "#0078d4" 
  },
  "backup-resilience": {
    title: "Sauvegarde & Continuité d’Activité",
    description: "Mise en œuvre de solutions Backup. Application de la règle 3-2-1-1-0 et tests de restauration PRA/PCA.",
    icon: "backup",
    color: "#107c10" 
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
  "linux-infra": {
    title: "Infrastructure Linux",
    description: "Maîtrise des distributions (Debian, Ubuntu, RedHat, Mint). Déploiement de services auto-hébergés comme Nextcloud et durcissement système.SSH et scripting Bash",
    icon: "linux",
    color: "#fdb813" 
  },
  "client-security": {
    title: "Sécurisation des Postes Clients",
    description: "Maîtrise du cycle de vie du poste de travail : Masterisation, déploiement par GPO, BitLocker et conformité de sécurité.",
    icon: "windows",
    color: "#0078d4"
  },
  "network-security": {
    title: "Sécurité Réseau & Commutation Cisco",
    description: "Conception de topologies sous Cisco Packet Tracer. Maîtrise de l'IOS, configuration de VLANs (802.1Q), Trunking, et routage inter-VLAN.",
    icon: "network",
    color: "#e81123" 
  },
  "firewalling-edge": {
      title: "Sécurité Périmétrique (pfSense / OPNsense)",
      description: "Mise en place de pare-feu, filtrage, sous-réseaux et tunnels VPN sécurisés pour le télétravail.",
      icon: "security",
      color: "#e81123"
    },
  "monitoring-logging": {
      title: "Supervision & Analyse de Logs",
      description: "Observabilité complète de l'infra : monitoring temps réel avec Zabbix et centralisation des logs avec Graylog.",
      icon: "monitoring",
      color: "#107c10"
    },
  "itsm": {
      title: "ITSM & Gestion du Parc",
      description: "Installation de GLPI, inventaire et gestion du cycle de vie des incidents.",
      icon: "itsm",
      color: "#42546d"
    }
};