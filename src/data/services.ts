export interface Service {
  name: string;
  port: number;
  color: string;
  description: string;
}

export const services: Service[] = [
  { name: 'Jellyfin', port: 8096, color: '#00a4dc', description: 'Media streaming server' },
  { name: 'Sonarr', port: 8989, color: '#3fc1f1', description: 'TV series automation' },
  { name: 'Radarr', port: 7878, color: '#ffc230', description: 'Movie automation' },
  { name: 'Prowlarr', port: 9696, color: '#c19bff', description: 'Indexer manager' },
  { name: 'qBittorrent', port: 8085, color: '#4caf50', description: 'Torrent client' },
  { name: 'PyLoad', port: 8000, color: '#ff9800', description: 'File hoster downloader' },
  { name: 'FlareSolverr', port: 8191, color: '#ff5722', description: 'Cloudflare bypass' },
  { name: 'MCP Server', port: 3000, color: '#8b5cf6', description: 'AI tool gateway' },
];
