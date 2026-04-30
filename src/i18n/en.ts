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
    description: 'Control your entire media library with natural language. A polished Desktop App with a built-in setup wizard, dashboard, and AI chat — or a one-command CLI for headless servers. Both drive the same stack of 30 MCP tools.',
    cta: 'Get Started',
    ctaSecondary: 'View on GitHub',
    install: {
      desktop: {
        tab:            'Desktop App',
        blurb:          'Native installer with a built-in wizard, dashboard, and AI chat.',
        download:       'Download',
        detecting:      'beta',
        otherPlatforms: 'See all platforms ↓',
      },
      cli: {
        tab:   'CLI',
        blurb: 'Headless install for VPS or server. Same wizard, no GUI.',
      },
    },
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
      title: 'Protected Access',
      description: 'OAuth-protected MCP access, internal API keys, browser origin allowlisting, and Docker network isolation.',
    },
  },
  tour: {
    badge: 'Mediabox OS — the desktop app',
    title: 'Your entire media stack, one app',
    subtitle: 'Mediabox OS deploys, monitors and lets you drive Jellyfin, Sonarr, Radarr, Prowlarr, qBittorrent, PyLoad and FlareSolverr — without ever opening five web UIs. The MCP server runs as a bundled sidecar, so there is nothing extra to install.',
    clickHint: 'Click any thumbnail to switch · click the main image to expand',
    slides: {
      stack: {
        tag:         'Stack overview',
        window:      'Mediabox OS — Dashboard',
        title:       'Nine services, one live view',
        description: 'Now-playing pulled from Jellyfin, server health, downloads merged from qBittorrent and PyLoad, library counts straight from your *arr stack — all rolled up on a single dashboard. Nothing here is a mockup; it talks to the real services.',
      },
      chat: {
        tag:         'AI assistant',
        window:      'Mediabox OS — AI assistant',
        title:       'Drive every service in plain English',
        description: 'An optional assistant powered by OpenRouter or Google Gemini wraps all 30 MCP tools. Ask "what is the server status?" and it queries Jellyfin and the *arrs in parallel, then answers in Markdown with expandable tool-call chips so you can see what really happened.',
      },
      choices: {
        tag:         'Smart disambiguation',
        window:      'Mediabox OS — AI assistant',
        title:       'No more typing IDs',
        description: 'When a search returns multiple matches across Sonarr, Radarr or Prowlarr, the assistant renders clickable cards. Each click round-trips the full ID the next step needs — Sonarr seriesId, Radarr movieId, indexer guids — without you ever copy-pasting.',
      },
      releases: {
        tag:         'From search to grab',
        window:      'Mediabox OS — AI assistant',
        title:       'Pick a release, the grab handles itself',
        description: 'Score-sorted release options as cards: language, quality, seeders, indexer. The right click triggers a Radarr/Sonarr release POST and qBittorrent picks it up — the assistant polls the queue and reports the live status, no false positives.',
      },
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
      macos: {
        title: 'macOS',
        subtitle: 'Universal · Apple Silicon + Intel',
        hint: 'One .dmg that runs natively on M-series and Intel Macs. Drag the app to Applications.',
      },
      linux: {
        title: 'Linux · Debian/Ubuntu',
        subtitle: 'amd64 · .deb',
        hint: 'Install with `sudo dpkg -i Mediabox.OS_*.deb`. AppImage support is on the roadmap.',
      },
    },
  },
} as const;
