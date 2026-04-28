import { useState } from 'react';

interface Slide {
  id:          string;
  src:         string;
  window:      string;
  title:       string;
  description: string;
  tag:         string;
}

interface Props {
  slides: Slide[];
}

/**
 * App tour carousel: one big primary screenshot + thumbnail row + caption
 * that updates as you pick. The primary image is also a lightbox trigger
 * (handled by the global Lightbox component listening for data-lightbox-src).
 */
export default function AppTourCarousel({ slides }: Props) {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Primary image */}
      <figure className="glass-card rounded-xl sm:rounded-2xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2 border-b border-border-subtle">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          <span className="ml-2 text-[10px] sm:text-xs text-text-muted font-mono truncate">{slide.window}</span>
        </div>
        <button
          type="button"
          data-lightbox-src={slide.src}
          data-lightbox-alt={slide.title}
          aria-label={`Open ${slide.title} fullscreen`}
          className="block w-full cursor-zoom-in group"
        >
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.title}
            loading="lazy"
            decoding="async"
            className="w-full block transition-transform duration-700 group-hover:scale-[1.01] animate-fade-in"
          />
        </button>
      </figure>

      {/* Caption */}
      <div className="px-1 sm:px-2">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full text-accent-hover bg-accent/10 border border-accent/20"
          >
            {slide.tag}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-1">{slide.title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">{slide.description}</p>
      </div>

      {/* Thumbnail row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {slides.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className={`relative rounded-lg sm:rounded-xl overflow-hidden border transition-all ${
                isActive
                  ? 'border-accent shadow-lg shadow-accent/20 ring-1 ring-accent/40'
                  : 'border-border-subtle hover:border-border-hover opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={s.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full block aspect-video object-cover object-top"
              />
              <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-xs font-medium text-white text-left truncate">
                {s.tag}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
