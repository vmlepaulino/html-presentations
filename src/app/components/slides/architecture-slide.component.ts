import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../models/slide.model';

@Component({
  selector: 'app-architecture-slide',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="arch">
      @if (slide.eyebrow) {
        <div class="eyebrow">{{ slide.eyebrow }}</div>
      }
      <h2>{{ slide.title }}</h2>

      <div class="stack">
        @for (layer of slide.layers; track $index; let i = $index; let last = $last; let count = $count) {
          <div class="row" [class.visible]="isVisible(i, count)">
            <div class="box" [attr.data-accent]="layer.accent || defaultAccent(i)">
              {{ layer.label }}
            </div>
            @if (layer.detail) {
              <div class="detail">{{ layer.detail }}</div>
            } @else {
              <div></div>
            }
          </div>
          @if (!last) {
            <div class="connector" [class.visible]="isVisible(i, count) && isVisible(i + 1, count)"></div>
          }
        }
      </div>

      @if (slide.note) {
        <p class="note">{{ slide.note }}</p>
      }
    </div>
  `,
  styles: [`
    .arch {
      max-width: min(96vw, 1500px);
      margin: 0 auto;
      padding: 2.5rem 2rem;
      width: 100%;
    }
    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-primary);
      font-weight: 600;
      font-size: 0.8rem;
      margin-bottom: 0.75rem;
    }
    h2 {
      font-size: var(--font-size-2xl);
      font-weight: 600;
      margin-bottom: 2rem;
      text-align: center;
    }
    .stack {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .row {
      width: 100%;
      max-width: min(94vw, 1300px);
      display: grid;
      grid-template-columns: 320px 1fr;
      column-gap: 1.75rem;
      align-items: center;
      opacity: 0;
      transform: translateY(8px);
      transition: opacity 350ms ease, transform 350ms ease;
    }
    .row.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .box {
      background: #fff;
      border: 1px solid var(--color-border);
      border-left: 4px solid var(--color-primary);
      border-radius: var(--radius);
      padding: 0.9rem 1.25rem;
      box-shadow: var(--shadow-card);
      font-weight: 600;
      font-size: var(--font-size-md);
      color: var(--color-text);
      text-align: center;
    }
    .box[data-accent="blue"]   { border-left-color: var(--color-primary); }
    .box[data-accent="teal"]   { border-left-color: var(--color-teal); }
    .box[data-accent="purple"] { border-left-color: var(--color-purple); }

    .detail {
      color: var(--color-text-secondary);
      font-size: 0.95rem;
      line-height: 1.5;
      padding-left: 0.9rem;
      border-left: 2px solid var(--color-border);
    }

    .connector {
      width: 320px;
      max-width: min(94vw, 1300px);
      height: 16px;
      display: flex;
      justify-content: flex-start;
      opacity: 0;
      transition: opacity 300ms ease;
    }
    .connector::before {
      content: '';
      width: 2px;
      height: 100%;
      background: var(--color-border);
      margin-left: 160px;
    }
    .connector.visible { opacity: 1; }

    .note {
      margin-top: 2rem;
      text-align: center;
      color: var(--color-text-muted);
      font-size: var(--font-size-sm);
      font-style: italic;
    }

    @media (max-width: 760px) {
      .row { grid-template-columns: 1fr; row-gap: 0.5rem; }
      .detail { border-left: none; padding-left: 0; }
      .connector { width: 100%; justify-content: center; }
      .connector::before { margin-left: 0; }
    }
  `]
})
export class ArchitectureSlideComponent {
  @Input({ required: true }) slide!: Slide;
  @Input() step = 0;

  defaultAccent(i: number): 'blue' | 'teal' | 'purple' {
    const palette: ('blue' | 'teal' | 'purple')[] = ['blue', 'teal', 'purple'];
    return palette[i % palette.length]!;
  }

  /**
   * Determine if layer at index `i` (0-based, top-down in the array) is visible.
   * If `revealFromBottom` is true, the bottom row reveals first.
   */
  isVisible(i: number, count: number): boolean {
    if (this.slide.revealFromBottom) {
      // bottom (index = count - 1) appears at step 1, then count-2 at step 2, etc.
      return i >= count - this.step;
    }
    return i < this.step;
  }
}
