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
    description: 'Controla toda tu biblioteca multimedia con lenguaje natural. Una App de Escritorio nativa con asistente de configuración integrado, dashboard y chat con IA — o un CLI de un solo comando para servidores headless. Ambos manejan el mismo stack con 30 herramientas MCP.',
    cta: 'Comenzar',
    ctaSecondary: 'Ver en GitHub',
    install: {
      desktop: {
        tab:            'App de Escritorio',
        blurb:          'Instalador nativo con wizard, dashboard y chat con IA integrados.',
        download:       'Descargar',
        detecting:      'beta',
        otherPlatforms: 'Ver todas las plataformas ↓',
      },
      cli: {
        tab:   'CLI',
        blurb: 'Instalación headless para VPS o servidor. El mismo wizard, sin GUI.',
      },
    },
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
      title: 'Acceso Protegido',
      description: 'Acceso MCP protegido con OAuth, API keys internas, lista de orígenes permitidos y aislamiento de red Docker.',
    },
  },
  tour: {
    badge: 'Mediabox OS — la app de escritorio',
    title: 'Todo tu media stack en una sola app',
    subtitle: 'Mediabox OS despliega, monitorea y te deja manejar Jellyfin, Sonarr, Radarr, Prowlarr, qBittorrent, PyLoad y FlareSolverr — sin necesidad de abrir cinco interfaces web. El servidor MCP corre como sidecar empaquetado, no necesitas instalar nada extra.',
    clickHint: 'Clic en cualquier miniatura para cambiar · clic en la imagen principal para expandir',
    slides: {
      stack: {
        tag:         'Vista del stack',
        window:      'Mediabox OS — Dashboard',
        title:       'Nueve servicios, una vista en vivo',
        description: 'Sesiones de Jellyfin en reproducción, salud del servidor, descargas combinadas de qBittorrent y PyLoad, conteos de biblioteca directos del stack *arr — todo agregado en un solo dashboard. Nada aquí es mockup; conversa con los servicios reales.',
      },
      chat: {
        tag:         'Asistente IA',
        window:      'Mediabox OS — Asistente IA',
        title:       'Maneja cada servicio en lenguaje natural',
        description: 'Un asistente opcional potenciado por OpenRouter o Google Gemini envuelve las 30 herramientas MCP. Pregunta "¿cómo está el servidor?" y consulta Jellyfin y los *arrs en paralelo, te responde en Markdown con tool-call chips expandibles para ver qué pasó realmente.',
      },
      choices: {
        tag:         'Desambiguación inteligente',
        window:      'Mediabox OS — Asistente IA',
        title:       'Sin escribir IDs nunca más',
        description: 'Cuando una búsqueda devuelve varios resultados en Sonarr, Radarr o Prowlarr, el asistente renderiza tarjetas clickeables. Cada click transporta el ID completo que necesita el siguiente paso — seriesId de Sonarr, movieId de Radarr, guids de indexer — sin que copies y pegues nada.',
      },
      releases: {
        tag:         'De búsqueda a descarga',
        window:      'Mediabox OS — Asistente IA',
        title:       'Eliges el release, el grab se encarga',
        description: 'Releases ordenados por puntaje en formato tarjeta: idioma, calidad, seeders, indexer. El click correcto dispara el POST a Radarr/Sonarr y qBittorrent lo recoge — el asistente monitorea la cola y reporta el estado real, sin falsos positivos.',
      },
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
      macos: {
        title: 'macOS',
        subtitle: 'Universal · Apple Silicon + Intel',
        hint: 'Un solo .dmg que corre nativo en Macs M-series e Intel. Arrastra la app a Aplicaciones.',
      },
      linux: {
        title: 'Linux · Debian/Ubuntu',
        subtitle: 'amd64 · .deb',
        hint: 'Instala con `sudo dpkg -i Mediabox.OS_*.deb`. El soporte AppImage está en la hoja de ruta.',
      },
    },
  },
} as const;
