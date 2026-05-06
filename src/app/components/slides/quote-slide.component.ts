import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../models/slide.model';

@Component({
  selector: 'app-quote-slide',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="quote-slide">
      <div class="mark">"</div>
      <blockquote>{{ slide.quote }}</blockquote>
      @if (slide.attribution) {
        <div class="attr">— {{ slide.attribution }}</div>
      }
    </div>
  `,
  styles: [`
    .quote-slide {
      max-width: min(94vw, 1300px);
      margin: 0 auto;
      padding: 4rem 2rem;
      text-align: center;
    }
    .mark {
      font-family: Georgia, serif;
      font-size: 6rem;
      line-height: 1;
      color: var(--color-primary);
      opacity: 0.5;
    }
    blockquote {
      font-size: var(--font-size-xl);
      font-weight: 400;
      color: var(--color-text);
      line-height: 1.4;
      margin-top: 0.5rem;
    }
    .attr {
      margin-top: 1.5rem;
      color: var(--color-text-muted);
      font-size: var(--font-size-sm);
      letter-spacing: 0.04em;
    }
  `]
})
export class QuoteSlideComponent {
  @Input({ required: true }) slide!: Slide;
}
