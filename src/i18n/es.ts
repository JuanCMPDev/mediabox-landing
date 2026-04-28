export default {
  nav: {
    home: 'Inicio',
    docs: 'Docs',
    github: 'GitHub',
  },
  hero: {
    badge: 'Servidor MCP Open Source',
    title: 'Gestión de Media Server',
    titleAccent: 'con IA',
    description: 'Controla toda tu biblioteca multimedia con lenguaje natural. Despliega Jellyfin, Sonarr, Radarr y más — un stack self-hosted completo gestionado por IA a través de 30 herramientas MCP, con App de Escritorio y un CLI de un solo comando.',
    cta: 'Comenzar',
    ctaSecondary: 'Ver en GitHub',
    install: 'Comienza en segundos',
    orDownload: 'O descarga la App de Escritorio ↓',
  },
  features: {
    title: 'Todo lo que necesitas',
    subtitle: 'Un stack multimedia self-hosted completo, orquestado por IA',
    dockerStack: {
      title: 'Stack Docker',
      description: 'Jellyfin, Sonarr, Radarr, qBittorrent, Prowlarr, PyLoad, FlareSolverr y más — todo orquestado con Docker Compose.',
    },
    aiTools: {
      title: '30 Herramientas IA',
      description: 'Busca, descarga, organiza y mantiene tu biblioteca multimedia completamente a través de conversaciones en lenguaje natural.',
    },
    cliWizard: {
      title: 'Setup en Un Comando',
      description: 'Ejecuta npx create-mediabox y el asistente interactivo se encarga de todo: configuración, Docker y auto-configuración de servicios.',
    },
    telegramBot: {
      title: 'Bot de Telegram',
      description: 'Gestiona tu servidor desde cualquier lugar con la integración opcional de Telegram potenciada por proveedores LLM.',
    },
    deployModes: {
      title: '3 Modos de Deploy',
      description: 'Red local, VPS con Caddy reverse proxy y auto-HTTPS, o Cloudflare Tunnel para servidores detrás de NAT.',
    },
    security: {
      title: 'Seguridad OAuth2',
      description: 'Servidor MCP seguro con autenticación OAuth2, gestión de API keys y aislamiento de red Docker.',
    },
  },
  architecture: {
    title: 'Arquitectura',
    subtitle: 'Una capa IA unificada conectando todos tus servicios multimedia',
    aiClient: 'Cliente IA',
    mcpServer: 'Servidor MCP',
    mediaVolume: 'Volumen Multimedia Compartido',
  },
  tools: {
    title: 'Herramientas Poderosas',
    subtitle: '30 herramientas en 6 categorías para gestionar cada aspecto de tu media server',
    badge: '30 herramientas',
    jellyfin: 'Jellyfin',
    library: 'Biblioteca',
    sonarr: 'Sonarr',
    radarr: 'Radarr',
    downloads: 'Descargas',
    maintenance: 'Mantenimiento',
  },
  deployment: {
    title: 'Despliega Donde Sea',
    subtitle: 'Elige el modo de despliegue que se adapte a tu configuración',
    local: {
      title: 'Local',
      description: 'Acceso directo por puertos en tu red local. La configuración más simple para uso personal.',
      bestFor: 'Ideal para: Red doméstica',
    },
    vps: {
      title: 'VPS + Caddy',
      description: 'HTTPS automático con Let\'s Encrypt. Cada servicio obtiene su propio subdominio.',
      bestFor: 'Ideal para: Servidores cloud',
    },
    tunnel: {
      title: 'Cloudflare Tunnel',
      description: 'Sin necesidad de abrir puertos. Acceso seguro a través de la red de Cloudflare.',
      bestFor: 'Ideal para: Home detrás de NAT',
    },
  },
  quickstart: {
    title: 'Funcionando en 3 Pasos',
    subtitle: 'De cero a un media server completamente configurado en minutos',
    step1: {
      title: 'Ejecuta el instalador',
      description: 'Un comando configura todo',
    },
    step2: {
      title: 'Responde al asistente',
      description: 'Elige modo de deploy, rutas de medios, credenciales para qBittorrent y Jellyfin, y opcionalmente habilita el bot de Telegram con tu API key de LLM',
    },
    step3: {
      title: 'Conecta tu IA',
      description: 'Agrega el servidor MCP a Claude Desktop o cualquier cliente MCP',
    },
  },
  stats: {
    tools: 'Herramientas MCP',
    services: 'Servicios Docker',
    deployModes: 'Modos de Deploy',
    command: 'Comando de Setup',
  },
  cta: {
    title: '¿Listo para automatizar tu media server?',
    subtitle: 'Únete a la comunidad open-source construyendo el futuro de la gestión multimedia con IA.',
    button: 'Comenzar',
    github: 'Star en GitHub',
  },
  footer: {
    builtBy: 'Creado por',
    license: 'Licencia MIT',
    description: 'Gestión de media server self-hosted con IA vía MCP.',
  },
  downloads: {
    badge: 'Beta · App de Escritorio',
    title: 'Descarga Mediabox OS',
    subtitle: 'App de Escritorio nativa con asistente de configuración integrado, dashboard, chat con IA y logs de contenedores en vivo. Empaqueta el servidor MCP como sidecar — no necesitas instalar nada extra.',
    download: 'Descargar',
    altInstaller: 'O descarga el instalador .exe (NSIS)',
    unsigned: 'Los builds beta no están firmados.',
    unsignedDetail: 'Windows SmartScreen y Gatekeeper de macOS van a advertir en el primer arranque — abre con clic-derecho → Abrir en macOS, o "Más información → Ejecutar de todas formas" en Windows.',
    allReleases: 'Todos los releases en GitHub',
    platforms: {
      windows: {
        title: 'Windows',
        subtitle: 'x64 · instalador MSI',
        hint: 'Funciona en Windows 10 / 11 (64-bit). Usa el .msi para instalaciones desatendidas o el .exe (NSIS) para un instalador guiado.',
      },
      'macos-arm': {
        title: 'macOS · Apple Silicon',
        subtitle: 'M1, M2, M3 · DMG',
        hint: 'Para Macs con chips Apple (serie M). Instalación drag-and-drop desde el .dmg.',
      },
      'macos-intel': {
        title: 'macOS · Intel',
        subtitle: 'x86_64 · DMG',
        hint: 'Para Macs con CPUs Intel. Instalación drag-and-drop desde el .dmg.',
      },
      linux: {
        title: 'Linux · Debian/Ubuntu',
        subtitle: 'amd64 · .deb',
        hint: 'Instala con `sudo dpkg -i Mediabox.OS_*.deb`. El soporte AppImage está en la hoja de ruta.',
      },
    },
  },
} as const;
