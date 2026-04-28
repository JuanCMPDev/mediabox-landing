export default {
  nav: {
    home: 'Home',
    docs: 'Docs',
    github: 'GitHub',
  },
  hero: {
    badge: 'Open Source MCP Server',
    title: 'AI-Powered Media Server',
    titleAccent: 'Management',
    description: 'Control your entire media library with natural language. Deploy Jellyfin, Sonarr, Radarr, and more — a complete self-hosted stack fully managed by AI through 30 MCP tools, with a Desktop App and a one-command CLI.',
    cta: 'Get Started',
    ctaSecondary: 'View on GitHub',
    install: 'Get started in seconds',
    orDownload: 'Or download the Desktop App ↓',
  },
  features: {
    title: 'Everything you need',
    subtitle: 'A complete self-hosted media stack, orchestrated by AI',
    dockerStack: {
      title: 'Docker Stack',
      description: 'Jellyfin, Sonarr, Radarr, qBittorrent, Prowlarr, PyLoad, FlareSolverr, and more — all orchestrated with Docker Compose.',
    },
    aiTools: {
      title: '30 AI Tools',
      description: 'Search, download, organize, and maintain your media library entirely through natural language conversations.',
    },
    cliWizard: {
      title: 'One-Command Setup',
      description: 'Run npx create-mediabox and the interactive wizard handles everything: config, Docker, and service auto-configuration.',
    },
    telegramBot: {
      title: 'Telegram Bot',
      description: 'Manage your server from anywhere with the optional Telegram integration powered by LLM providers.',
    },
    deployModes: {
      title: '3 Deploy Modes',
      description: 'Local network, VPS with Caddy reverse proxy and auto-HTTPS, or Cloudflare Tunnel for home servers behind NAT.',
    },
    security: {
      title: 'OAuth2 Security',
      description: 'Secure MCP server with OAuth2 authentication, API key management, and Docker network isolation.',
    },
  },
  architecture: {
    title: 'Architecture',
    subtitle: 'A unified AI layer connecting all your media services',
    aiClient: 'AI Client',
    mcpServer: 'MCP Server',
    mediaVolume: 'Shared Media Volume',
  },
  tools: {
    title: 'Powerful Tools',
    subtitle: '30 tools across 6 categories to manage every aspect of your media server',
    badge: '30 tools',
    jellyfin: 'Jellyfin',
    library: 'Library',
    sonarr: 'Sonarr',
    radarr: 'Radarr',
    downloads: 'Downloads',
    maintenance: 'Maintenance',
  },
  deployment: {
    title: 'Deploy Anywhere',
    subtitle: 'Choose the deployment mode that fits your setup',
    local: {
      title: 'Local',
      description: 'Direct port access on your home network. Simplest setup for personal use.',
      bestFor: 'Best for: Home network',
    },
    vps: {
      title: 'VPS + Caddy',
      description: 'Automatic HTTPS with Let\'s Encrypt. Each service gets its own subdomain.',
      bestFor: 'Best for: Cloud servers',
    },
    tunnel: {
      title: 'Cloudflare Tunnel',
      description: 'No port forwarding needed. Secure access through Cloudflare\'s network.',
      bestFor: 'Best for: Home behind NAT',
    },
  },
  quickstart: {
    title: 'Up and Running in 3 Steps',
    subtitle: 'From zero to a fully configured media server in minutes',
    step1: {
      title: 'Run the installer',
      description: 'One command bootstraps everything',
    },
    step2: {
      title: 'Answer the wizard',
      description: 'Choose deployment mode, set media paths, credentials for qBittorrent and Jellyfin, and optionally enable Telegram bot with your LLM API key',
    },
    step3: {
      title: 'Connect your AI',
      description: 'Add the MCP server to Claude Desktop or any MCP client',
    },
  },
  stats: {
    tools: 'MCP Tools',
    services: 'Docker Services',
    deployModes: 'Deploy Modes',
    command: 'Command Setup',
  },
  cta: {
    title: 'Ready to automate your media server?',
    subtitle: 'Join the open-source community building the future of AI-powered media management.',
    button: 'Get Started',
    github: 'Star on GitHub',
  },
  footer: {
    builtBy: 'Built by',
    license: 'MIT License',
    description: 'AI-powered self-hosted media server management via MCP.',
  },
  downloads: {
    badge: 'Beta · Desktop App',
    title: 'Download Mediabox OS',
    subtitle: 'Native Desktop App with a built-in setup wizard, dashboard, AI chat, and live container logs. Bundles the MCP server as a sidecar — no extra install needed.',
    download: 'Download',
    altInstaller: 'Or download the .exe (NSIS) installer',
    unsigned: 'Beta builds are unsigned.',
    unsignedDetail: 'Windows SmartScreen and macOS Gatekeeper will warn on first launch — open via right-click → Open on macOS, or "More info → Run anyway" on Windows.',
    allReleases: 'All releases on GitHub',
    platforms: {
      windows: {
        title: 'Windows',
        subtitle: 'x64 · MSI installer',
        hint: 'Works on Windows 10 / 11 (64-bit). Use the .msi for unattended installs or the .exe (NSIS) for a guided installer.',
      },
      'macos-arm': {
        title: 'macOS · Apple Silicon',
        subtitle: 'M1, M2, M3 · DMG',
        hint: 'For Macs with Apple Silicon (M-series). Drag-and-drop install via the .dmg.',
      },
      'macos-intel': {
        title: 'macOS · Intel',
        subtitle: 'x86_64 · DMG',
        hint: 'For Macs with Intel CPUs. Drag-and-drop install via the .dmg.',
      },
      linux: {
        title: 'Linux · Debian/Ubuntu',
        subtitle: 'amd64 · .deb',
        hint: 'Install with `sudo dpkg -i Mediabox.OS_*.deb`. AppImage support is on the roadmap.',
      },
    },
  },
} as const;
