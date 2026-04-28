import { useEffect, useMemo, useState } from 'react';
import { downloads, RELEASES_PAGE_URL } from '../../data/downloads';

interface Strings {
  desktopTab:    string;
  cliTab:        string;
  desktopBlurb:  string;
  cliBlurb:      string;
  download:      string;
  detecting:     string;
  otherPlatforms: string;
}

interface Props {
  strings: Strings;
}

type TabId = 'desktop' | 'cli';

const INSTALL_CMD = 'npx create-mediabox';

/**
 * Hero install picker. Two tabs (Desktop / CLI) — default is Desktop so the
 * native app gets first-class billing. The active tab is also reflected as
 * `data-active-tab` on `#hero-visual` so the surrounding Astro markup can
 * swap the screenshot ↔ terminal mockup with pure CSS, no extra island.
 */
export default function InstallPicker({ strings }: Props) {
  const [tab, setTab]       = useState<TabId>('desktop');
  const [copied, setCopied] = useState(false);
  const [detected, setDetected] = useState<'windows' | 'macos' | 'linux' | null>(null);

  // Reflect the active tab on the wrapper so CSS can toggle siblings.
  useEffect(() => {
    document.getElementById('hero-visual')?.setAttribute('data-active-tab', tab);
  }, [tab]);

  // Cheap UA-based platform sniff. Falls back to the releases page if we
  // can't tell — never blocks the user from downloading.
  useEffect(() => {
    const ua = (navigator.userAgent || '').toLowerCase();
    if (ua.includes('win'))                   setDetected('windows');
    else if (ua.includes('mac') || ua.includes('darwin')) setDetected('macos');
    else if (ua.includes('linux') || ua.includes('x11'))   setDetected('linux');
  }, []);

  const matchingDownload = useMemo(() => {
    if (!detected) return null;
    return downloads.find((d) => d.id === detected) ?? null;
  }, [detected]);

  const downloadHref  = matchingDownload?.url   ?? RELEASES_PAGE_URL;
  const downloadLabel = matchingDownload
    ? `${strings.download} · ${matchingDownload.id === 'macos' ? 'macOS' : matchingDownload.id[0].toUpperCase() + matchingDownload.id.slice(1)}`
    : strings.download;
  const downloadMeta  = matchingDownload
    ? `${matchingDownload.extension} · ${matchingDownload.size}`
    : strings.detecting;

  async function handleCopy() {
    await navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="w-full max-w-md">
      {/* Tab switcher */}
      <div role="tablist" aria-label="Install method" className="inline-flex gap-1 mb-3 p-1 rounded-full bg-white/5 border border-border-subtle">
        <button
          role="tab"
          aria-selected={tab === 'desktop'}
          onClick={() => setTab('desktop')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
            tab === 'desktop'
              ? 'bg-accent text-white shadow-lg shadow-accent/25'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          {strings.desktopTab}
        </button>
        <button
          role="tab"
          aria-selected={tab === 'cli'}
          onClick={() => setTab('cli')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
            tab === 'cli'
              ? 'bg-accent text-white shadow-lg shadow-accent/25'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          {strings.cliTab}
        </button>
      </div>

      {/* Active panel */}
      {tab === 'desktop' ? (
        <div className="space-y-2">
          <p className="text-xs text-text-muted">{strings.desktopBlurb}</p>
          <a
            href={downloadHref}
            className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            <span className="inline-flex items-center gap-2 font-medium text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              {downloadLabel}
            </span>
            <span className="text-[11px] font-mono opacity-80">{downloadMeta}</span>
          </a>
          <a
            href="#downloads"
            className="block text-[11px] text-text-muted hover:text-accent-hover text-center transition-colors"
          >
            {strings.otherPlatforms}
          </a>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-xs text-text-muted">{strings.cliBlurb}</p>
          <div className="glass-card rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="text-accent shrink-0">$</span>
              <code className="text-sm font-mono text-text-primary truncate">{INSTALL_CMD}</code>
            </div>
            <button
              onClick={handleCopy}
              aria-label="Copy command"
              className="inline-flex items-center justify-center w-8 h-8 rounded-md text-text-muted hover:text-text-primary hover:bg-white/10 transition-all"
            >
              {copied ? (
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
