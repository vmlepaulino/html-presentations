import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../models/slide.model';

@Component({
  selector: 'app-title-slide',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="title-slide">
      <div class="brand-bar"></div>
      @if (slide.eyebrow) {
        <div class="eyebrow">{{ slide.eyebrow }}</div>
      }
      <h1>{{ slide.title }}</h1>
      @if (slide.subtitle) {
        <p class="subtitle">{{ slide.subtitle }}</p>
      }
      <div class="meta">Global Azure 2026 · Architect track</div>
    </div>
  `,
  styles: [`
    .title-slide {
      max-width: min(96vw, 1500px);
      margin: 0 auto;
      padding: 4rem 2rem;
    }
    .brand-bar {
      width: 64px;
      height: 6px;
      background: linear-gradient(90deg, var(--color-primary), var(--color-purple));
      border-radius: 3px;
      margin-bottom: 2rem;
    }
    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-primary);
      font-weight: 600;
      font-size: 0.85rem;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: var(--font-size-3xl);
      font-weight: 700;
      line-height: 1.1;
      color: var(--color-text);
      letter-spacing: -0.02em;
    }
    .subtitle {
      margin-top: 1.25rem;
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      font-weight: 400;
      max-width: 720px;
    }
    .meta {
      margin-top: 3rem;
      color: var(--color-text-muted);
      font-size: var(--font-size-sm);
    }
  `]
})
export class TitleSlideComponent {
  @Input({ required: true }) slide!: Slide;
}
