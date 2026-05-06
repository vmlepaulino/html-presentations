import { Injectable, signal, computed } from '@angular/core';
import { SLIDES } from '../data/slides.data';
import { Slide } from '../models/slide.model';

@Injectable({ providedIn: 'root' })
export class SlideService {
  readonly slides: Slide[] = SLIDES;

  // current slide index (0-based)
  readonly index = signal(0);
  // bullet reveal step within the current slide
  readonly step = signal(0);

  readonly current = computed(() => this.slides[this.index()]);
  readonly total = this.slides.length;
  readonly progress = computed(() => ((this.index() + 1) / this.total) * 100);

  /** Go to next reveal step or next slide. */
  next(): void {
    const slide = this.current();
    const max = this.maxStep(slide);
    if (this.step() < max) {
      this.step.update(s => s + 1);
    } else if (this.index() < this.total - 1) {
      this.index.update(i => i + 1);
      this.step.set(0);
    }
  }

  /** Go to previous reveal step or previous slide. */
  prev(): void {
    if (this.step() > 0) {
      this.step.update(s => s - 1);
    } else if (this.index() > 0) {
      this.index.update(i => i - 1);
      const prev = this.current();
      this.step.set(this.maxStep(prev));
    }
  }

  goto(i: number): void {
    if (i >= 0 && i < this.total) {
      this.index.set(i);
      this.step.set(0);
    }
  }

  /** Maximum bullet-reveal step for a slide (0 = all visible at once). */
  private maxStep(slide: Slide): number {
    switch (slide.type) {
      case 'bullets':
        return slide.bullets?.length ?? 0;
      case 'two-column': {
        return 2;
      }
      case 'architecture':
        return slide.layers?.length ?? 0;
      default:
        return 0;
    }
  }
}
