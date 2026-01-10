// Série 1 : Fondations & Sécurité du Socle
// Objectif : Installation propre et durcissement initial
export const WIN_INFRA_CORE = [
  { label: "Virtualisation Windows Server 2022", href: "/projets/vmware-setup" },
  { label: "Socle AD & Sécurité", href: "/projets/socle-ad-securite" },
  { label: "Audit PingCastle", href: "/projets/audit-pingcastle" },
  { label: "PKI / AD CS", href: "/projets/ad-cs" },
  { label : "LDAPS" , href: "/projets/ldaps"}
];

// Série 2 : Gouvernance & Administration
// Objectif : Gestion des ressources, utilisateurs et automatisation
export const WIN_ADMIN_GOV = [
  { label: "Stratégie AGDLP", href: "/projets/agdlp-identites" },
  { label: "Partages & Permissions NTFS", href: "/projets/partages-fichiers" },
  { label: "PowerShell & Structure OU", href: "/projets/powershell-ou" }
];

// Série 3 : Gestion du Parc & Conformité
// Objectif : Déploiement client, GPO et protection des terminaux
export const WIN_CLIENT_SECURITY = [
  { label: "Mappage Réseau par GPO", href: "/projets/gpo-mappage" },
  { label: "Intégration & Tests Clients", href: "/projets/tests-clients" },
  { label: "GPO & Hardening", href: "/projets/gpo-globales" },
  { label: "BitLocker (Sans TPM)", href: "/projets/bitlocker-lab" }
];

// Lab PFSENSE 
export const PFSENSE_LAB = [
  { label: "Installation", href: "/projets/pfsense-install" },
  { label: "VLANs & Rules", href: "/projets/pfsense-vlans" },
  { label: "VPN IPsec", href: "/projets/pfsense-vpn" }
];