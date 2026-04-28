/**
 * Single source of truth for the Desktop App release links shown on the
 * landing. Bump `RELEASE_TAG` when a new tag ships and the per-platform
 * filenames will resolve automatically.
 *
 * Note: the Tauri bundle filenames embed the version from `tauri.conf.json`
 * (currently `2.1.0`), which can drift from the git tag (`v2.1.0-beta.0`).
 * `BUNDLE_VERSION` mirrors the bundle version, not the tag.
 */

export const RELEASE_TAG    = 'v2.1.0-beta.0';
export const BUNDLE_VERSION = '2.1.0';

const ASSET_BASE = `https://github.com/JuanCMPDev/mediabox-mcp/releases/download/${RELEASE_TAG}`;

export const RELEASES_PAGE_URL =
  'https://github.com/JuanCMPDev/mediabox-mcp/releases';

export interface DownloadAsset {
  /** i18n key under `downloads.platforms.<id>` for label + hint copy. */
  id:        'windows' | 'macos-arm' | 'macos-intel' | 'linux';
  /** Lucide icon name. */
  icon:      string;
  /** Brand colour for the platform card border / icon. */
  color:     string;
  /** File extension shown in the card chip. */
  extension: string;
  /** Direct URL to the `.msi` / `.dmg` / `.deb`. */
  url:       string;
  /** Optional second URL (e.g. NSIS exe alongside the MSI on Windows). */
  altUrl?:   string;
  /** Approx. installer size, helps users on metered connections. */
  size:      string;
}

export const downloads: DownloadAsset[] = [
  {
    id:        'windows',
    icon:      'lucide:monitor',
    color:     '#0078d4',
    extension: '.msi',
    url:       `${ASSET_BASE}/Mediabox.OS_${BUNDLE_VERSION}_x64_en-US.msi`,
    altUrl:    `${ASSET_BASE}/Mediabox.OS_${BUNDLE_VERSION}_x64-setup.exe`,
    size:      '~50 MB',
  },
  {
    id:        'macos-arm',
    icon:      'lucide:laptop',
    color:     '#a78bfa',
    extension: '.dmg',
    url:       `${ASSET_BASE}/Mediabox.OS_${BUNDLE_VERSION}_aarch64.dmg`,
    size:      '~45 MB',
  },
  {
    id:        'macos-intel',
    icon:      'lucide:laptop',
    color:     '#06b6d4',
    extension: '.dmg',
    url:       `${ASSET_BASE}/Mediabox.OS_${BUNDLE_VERSION}_x64.dmg`,
    size:      '~45 MB',
  },
  {
    id:        'linux',
    icon:      'lucide:terminal',
    color:     '#ffc230',
    extension: '.deb',
    url:       `${ASSET_BASE}/Mediabox.OS_${BUNDLE_VERSION}_amd64.deb`,
    size:      '~55 MB',
  },
];
