import { Directive, ElementRef, Input, OnInit, OnDestroy, inject } from '@angular/core';

/**
 * Adds `.is-visible` to the host element the first time it scrolls
 * into the viewport, triggering the CSS reveal transition defined in
 * styles.scss (`[appReveal]`). Usage: <div appReveal [revealDelay]="80">
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const host = this.el.nativeElement;
    host.classList.add('reveal-on-scroll');
    host.style.transitionDelay = `${this.revealDelay}ms`;

    if (typeof IntersectionObserver === 'undefined') {
      host.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          host.classList.add('is-visible');
          this.observer?.unobserve(host);
        }
      },
      { threshold: 0.15 }
    );
    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
