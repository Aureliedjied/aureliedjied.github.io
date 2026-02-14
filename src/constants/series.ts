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
    description: "Conception, déploiement et promotion de contrôleurs de domaine (AD DS). Gestion des rôles FSMO et catalogues globaux.",
    icon: "windows",
    color: "#0078d4" // Bleu Microsoft
  },
  "identity-security": {
    title: "Sécurité des Identités & PKI",
    description: "Mise en place d'autorités de certification (AD CS), certificats SSL/TLS, LDAPS et sécurisation des comptes privilèges.",
    icon: "windows",
    color: "#0078d4" // Bleu Microsoft
  },
  "backup-resilience": {
    title: "Sauvegarde & Continuité d’Activité",
    description: "Mise en œuvre de solutions Backup. Application de la règle 3-2-1-1-0 et tests de restauration PRA/PCA.",
    icon: "backup",
    color: "#107c10" // Vert "Healthy"
  },
  "governance-access": {
    title: "Gouvernance & Gestion des Accès",
    description: "Administration des ressources via le modèle AGDLP. Audit des droits NTFS, partage de fichiers et délégations d'administration.",
    icon: "windows",
    color: "#0078d4"
  },
  "linux-infra": {
    title: "Infrastructure Linux",
    description: "Maîtrise des distributions (Debian, Ubuntu, RedHat, Mint). Déploiement de services auto-hébergés comme Nextcloud et durcissement système.SSH et scripting Bash",
    icon: "linux",
    color: "#fdb813" // Jaune-Orange Linux
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
    color: "#e81123" // Rouge Cisco
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
      color: "#4b5563"
    }
};