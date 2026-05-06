import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../models/slide.model';

@Component({
  selector: 'app-section-slide',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section-slide">
      @if (slide.eyebrow) { <div class="eyebrow">{{ slide.eyebrow }}</div> }
      <h1>{{ slide.title }}</h1>
      @if (slide.subtitle) { <p>{{ slide.subtitle }}</p> }
      <div class="rule"></div>
    </div>
  `,
  styles: [`
    .section-slide {
      max-width: min(96vw, 1300px);
      margin: 0 auto;
      padding: 4rem 2rem;
    }
    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--color-purple);
      font-weight: 600;
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: var(--font-size-3xl);
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.1;
    }
    p {
      margin-top: 1rem;
      color: var(--color-text-secondary);
      font-size: var(--font-size-lg);
      max-width: 700px;
    }
    .rule {
      margin-top: 2rem;
      width: 80px;
      height: 3px;
      background: var(--color-primary);
      border-radius: 2px;
    }
  `]
})
export class SectionSlideComponent {
  @Input({ required: true }) slide!: Slide;
}
