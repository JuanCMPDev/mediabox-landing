export interface Tool {
  name: string;
  description: string;
  descriptionEs: string;
}

export interface ToolCategory {
  id: string;
  icon: string;
  color: string;
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    id: 'jellyfin',
    icon: 'play',
    color: '#00a4dc',
    tools: [
      { name: 'server_status', description: 'Server info, disk usage, library stats, active sessions', descriptionEs: 'Info del servidor, uso de disco, estadísticas de biblioteca, sesiones activas' },
      { name: 'activity_log', description: 'Recent activity: who watched what, logins, library changes', descriptionEs: 'Actividad reciente: quién vio qué, inicios de sesión, cambios en biblioteca' },
      { name: 'search_media', description: 'Search or list content with pagination and type filtering', descriptionEs: 'Buscar o listar contenido con paginación y filtrado por tipo' },
      { name: 'show_details', description: 'TV show details with seasons and episodes breakdown', descriptionEs: 'Detalles de series con desglose de temporadas y episodios' },
    ],
  },
  {
    id: 'library',
    icon: 'hard-drive',
    color: '#a78bfa',
    tools: [
      { name: 'manage_library', description: 'Create library, trigger scan, refresh metadata', descriptionEs: 'Crear biblioteca, iniciar escaneo, refrescar metadatos' },
      { name: 'manage_files', description: 'List, move, or delete files and folders', descriptionEs: 'Listar, mover o eliminar archivos y carpetas' },
      { name: 'rename_episodes', description: 'Batch rename episodes to standard format', descriptionEs: 'Renombrar episodios en lote al formato estándar' },
      { name: 'get_library_state', description: 'Cross-service snapshot combining Jellyfin and *arr data', descriptionEs: 'Snapshot multi-servicio combinando datos de Jellyfin y *arr' },
      { name: 'fix_subtitles', description: 'Convert ASS/SSA subtitles to SRT in MKV files', descriptionEs: 'Convertir subtítulos ASS/SSA a SRT en archivos MKV' },
    ],
  },
  {
    id: 'sonarr',
    icon: 'tv',
    color: '#3fc1f1',
    tools: [
      { name: 'series_search', description: 'Search TV series and add to monitoring', descriptionEs: 'Buscar series de TV y agregar a monitoreo' },
      { name: 'series_status', description: 'View monitored series, calendar, missing, queue, history', descriptionEs: 'Ver series monitoreadas, calendario, faltantes, cola, historial' },
      { name: 'series_remove', description: 'Remove a series from Sonarr', descriptionEs: 'Eliminar una serie de Sonarr' },
      { name: 'series_releases', description: 'Search available torrent releases for episodes', descriptionEs: 'Buscar releases de torrents disponibles para episodios' },
      { name: 'series_grab', description: 'Download specific release with duplicate prevention', descriptionEs: 'Descargar release específico con prevención de duplicados' },
      { name: 'series_import', description: 'Manually import already-downloaded episode files into Sonarr', descriptionEs: 'Importar manualmente archivos de episodios ya descargados a Sonarr' },
      { name: 'series_rescan', description: 'Rescan a series folder so Sonarr picks up new files', descriptionEs: 'Reescanear la carpeta de una serie para que Sonarr detecte archivos nuevos' },
    ],
  },
  {
    id: 'radarr',
    icon: 'film',
    color: '#ffc230',
    tools: [
      { name: 'movie_search', description: 'Search movies and add to Radarr for monitoring', descriptionEs: 'Buscar películas y agregar a Radarr para monitoreo' },
      { name: 'movie_status', description: 'View monitored movies, queue, or download history', descriptionEs: 'Ver películas monitoreadas, cola o historial de descargas' },
      { name: 'movie_remove', description: 'Remove a movie from Radarr', descriptionEs: 'Eliminar una película de Radarr' },
      { name: 'movie_releases', description: 'Search available torrent releases for a movie', descriptionEs: 'Buscar releases de torrents disponibles para una película' },
      { name: 'movie_grab', description: 'Download specific release with duplicate prevention', descriptionEs: 'Descargar release específico con prevención de duplicados' },
      { name: 'movie_import', description: 'Manually import already-downloaded movie files into Radarr', descriptionEs: 'Importar manualmente archivos de películas ya descargados a Radarr' },
      { name: 'movie_rescan', description: 'Rescan a movie folder so Radarr picks up new files', descriptionEs: 'Reescanear la carpeta de una película para que Radarr detecte archivos nuevos' },
    ],
  },
  {
    id: 'downloads',
    icon: 'download',
    color: '#06b6d4',
    tools: [
      { name: 'download_add', description: 'Add URLs to PyLoad for file hoster downloads', descriptionEs: 'Agregar URLs a PyLoad para descargas de file hosters' },
      { name: 'download_status', description: 'Check PyLoad queue, organize downloads, delete packages', descriptionEs: 'Verificar cola de PyLoad, organizar descargas, eliminar paquetes' },
      { name: 'download_direct', description: 'Direct HTTP or YouTube downloads via aria2c/yt-dlp', descriptionEs: 'Descargas directas HTTP o YouTube vía aria2c/yt-dlp' },
      { name: 'cancel_downloads', description: 'Manage Sonarr/Radarr/qBittorrent download queues', descriptionEs: 'Gestionar colas de descarga de Sonarr/Radarr/qBittorrent' },
    ],
  },
  {
    id: 'maintenance',
    icon: 'wrench',
    color: '#4caf50',
    tools: [
      { name: 'optimize_media', description: 'Strip unwanted audio/subtitle tracks from MKV files', descriptionEs: 'Eliminar pistas de audio/subtítulos no deseadas de archivos MKV' },
      { name: 'cleanup_server', description: 'Remove cache, temp files, orphan entries, completed torrents', descriptionEs: 'Eliminar caché, archivos temporales, entradas huérfanas, torrents completados' },
      { name: 'check_jobs', description: 'Monitor status of background operations', descriptionEs: 'Monitorear estado de operaciones en segundo plano' },
    ],
  },
];
