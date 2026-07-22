import { Injectable, signal } from '@angular/core';

/**
 * Tracks which page section is currently in view (for the active nav
 * state) and centralizes smooth-scrolling to a section id.
 */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  readonly activeSection = signal<string>('home');
  private observer?: IntersectionObserver;

  observeSections(sectionIds: string[]): void {
    if (typeof IntersectionObserver === 'undefined') return;

    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeSection.set(sectionId);
  }

  disconnect(): void {
    this.observer?.disconnect();
  }
}
