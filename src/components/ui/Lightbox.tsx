import { useEffect, useState } from 'react';

/**
 * Image lightbox. Listens for clicks on any element marked with
 * `data-lightbox-src="…"` (and optional `data-lightbox-alt`) and opens a
 * modal with the full-size image. Closes on Esc, on click outside the
 * image, or on the close button.
 *
 * Decoupled this way so any Astro component can use it just by adding the
 * data attributes — no JSX wiring required for each call site.
 */
export default function Lightbox() {
  const [open, setOpen] = useState(false);
  const [src, setSrc]   = useState<string | null>(null);
  const [alt, setAlt]   = useState<string>('');

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>('[data-lightbox-src]');
      if (!target) return;
      e.preventDefault();
      const dsrc = target.dataset.lightboxSrc;
      if (!dsrc) return;
      setSrc(dsrc);
      setAlt(target.dataset.lightboxAlt ?? '');
      setOpen(true);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open || !src) return null;

  return (
    <div
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Screenshot preview'}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md cursor-zoom-out p-4 sm:p-8 animate-fade-in"
    >
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(false); }}
        aria-label="Close preview"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full rounded-xl shadow-2xl cursor-default"
      />
      {alt && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full pointer-events-none">
          {alt}
        </p>
      )}
    </div>
  );
}
