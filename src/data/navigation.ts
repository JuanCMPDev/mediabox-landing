export interface NavItem {
  title: string;
  titleEs: string;
  href: string;
}

export interface NavSection {
  title: string;
  titleEs: string;
  items: NavItem[];
}

export const docsNavigation: NavSection[] = [
  {
    title: 'Getting Started',
    titleEs: 'Primeros Pasos',
    items: [
      { title: 'Introduction', titleEs: 'Introducción', href: '/docs/getting-started/introduction' },
      { title: 'Prerequisites', titleEs: 'Prerrequisitos', href: '/docs/getting-started/prerequisites' },
      { title: 'Quick Start', titleEs: 'Inicio Rápido', href: '/docs/getting-started/quick-start' },
      { title: 'Manual Setup', titleEs: 'Configuración Manual', href: '/docs/getting-started/manual-setup' },
    ],
  },
  {
    title: 'Configuration',
    titleEs: 'Configuración',
    items: [
      { title: 'Environment Variables', titleEs: 'Variables de Entorno', href: '/docs/configuration/environment-variables' },
      { title: 'Docker Compose', titleEs: 'Docker Compose', href: '/docs/configuration/docker-compose' },
      { title: 'CLI Options', titleEs: 'Opciones del CLI', href: '/docs/configuration/cli-options' },
    ],
  },
  {
    title: 'Deployment',
    titleEs: 'Despliegue',
    items: [
      { title: 'Local Mode', titleEs: 'Modo Local', href: '/docs/deployment/local' },
      { title: 'VPS with Caddy', titleEs: 'VPS con Caddy', href: '/docs/deployment/vps-caddy' },
      { title: 'Cloudflare Tunnel', titleEs: 'Cloudflare Tunnel', href: '/docs/deployment/cloudflare-tunnel' },
    ],
  },
  {
    title: 'MCP Tools',
    titleEs: 'Herramientas MCP',
    items: [
      { title: 'Overview', titleEs: 'Vista General', href: '/docs/tools/overview' },
      { title: 'Jellyfin Tools', titleEs: 'Herramientas Jellyfin', href: '/docs/tools/jellyfin' },
      { title: 'Library Tools', titleEs: 'Herramientas de Biblioteca', href: '/docs/tools/library' },
      { title: 'Sonarr Tools', titleEs: 'Herramientas Sonarr', href: '/docs/tools/sonarr' },
      { title: 'Radarr Tools', titleEs: 'Herramientas Radarr', href: '/docs/tools/radarr' },
      { title: 'Download Tools', titleEs: 'Herramientas de Descarga', href: '/docs/tools/downloads' },
      { title: 'Maintenance Tools', titleEs: 'Herramientas de Mantenimiento', href: '/docs/tools/maintenance' },
    ],
  },
  {
    title: 'Integrations',
    titleEs: 'Integraciones',
    items: [
      { title: 'Claude Desktop', titleEs: 'Claude Desktop', href: '/docs/integrations/claude-desktop' },
      { title: 'Telegram Bot', titleEs: 'Bot de Telegram', href: '/docs/integrations/telegram-bot' },
      { title: 'Other Clients', titleEs: 'Otros Clientes', href: '/docs/integrations/other-clients' },
    ],
  },
  {
    title: 'Reference',
    titleEs: 'Referencia',
    items: [
      { title: 'Architecture', titleEs: 'Arquitectura', href: '/docs/reference/architecture' },
      { title: 'Troubleshooting', titleEs: 'Solución de Problemas', href: '/docs/reference/troubleshooting' },
    ],
  },
];

export function getNavForLocale(locale: string) {
  const isEs = locale === 'es';
  return docsNavigation.map((section) => ({
    title: isEs ? section.titleEs : section.title,
    items: section.items.map((item) => ({
      title: isEs ? item.titleEs : item.title,
      href: isEs ? `/es${item.href}` : item.href,
    })),
  }));
}

export function getPrevNext(currentPath: string, locale: string) {
  const nav = getNavForLocale(locale);
  const allItems = nav.flatMap((s) => s.items);
  const idx = allItems.findIndex((item) => item.href === currentPath);
  return {
    prev: idx > 0 ? allItems[idx - 1] : null,
    next: idx < allItems.length - 1 ? allItems[idx + 1] : null,
  };
}
