import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../models/slide.model';

@Component({
  selector: 'app-two-column-slide',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="two-col">
      @if (slide.eyebrow) {
        <div class="eyebrow">{{ slide.eyebrow }}</div>
      }
      <h2>{{ slide.title }}</h2>
      @if (slide.subtitle) {
        <p class="subtitle">{{ slide.subtitle }}</p>
      }
      <div class="grid">
        <div class="card" [attr.data-accent]="slide.left?.accent || 'blue'">
          @if (slide.left?.title) { <h3>{{ slide.left?.title }}</h3> }
          <ul>
            @for (b of slide.left?.bullets; track $index; let i = $index) {
              <li [class.visible]="i < step">
                <span class="bullet-text">{{ b.text }}</span>
                @if (b.sub?.length) {
                  <ul class="sub">
                    @for (s of b.sub; track $index) {
                      <li>{{ s }}</li>
                    }
                  </ul>
                }
              </li>
            }
          </ul>
        </div>
        <div class="card" [attr.data-accent]="slide.right?.accent || 'purple'">
          @if (slide.right?.title) { <h3>{{ slide.right?.title }}</h3> }
          <ul>
            @for (b of slide.right?.bullets; track $index; let i = $index) {
              <li [class.visible]="i < step - leftCount">
                <span class="bullet-text">{{ b.text }}</span>
                @if (b.sub?.length) {
                  <ul class="sub">
                    @for (s of b.sub; track $index) {
                      <li>{{ s }}</li>
                    }
                  </ul>
                }
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .two-col {
      max-width: min(96vw, 1700px);
      margin: 0 auto;
      padding: 1.25rem 1.75rem;
      width: 100%;
    }
    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-primary);
      font-weight: 600;
      font-size: 0.7rem;
      margin-bottom: 0.3rem;
    }
    h2 {
      font-size: var(--font-size-lg);
      font-weight: 600;
      margin-bottom: 0.35rem;
      line-height: 1.2;
    }
    .subtitle {
      color: var(--color-text-secondary);
      font-size: 0.82rem;
      margin-top: 0;
      margin-bottom: 0.85rem;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .card {
      background: #fff;
      border: 1px solid var(--color-border);
      border-top: 3px solid var(--color-primary);
      border-radius: var(--radius-lg);
      padding: 0.9rem 1.1rem;
      box-shadow: var(--shadow-card);
    }
    .card[data-accent="blue"]   { border-top-color: var(--color-primary); }
    .card[data-accent="teal"]   { border-top-color: var(--color-teal); }
    .card[data-accent="purple"] { border-top-color: var(--color-purple); }

    h3 {
      font-size: 0.92rem;
      font-weight: 600;
      color: var(--color-text);
      margin-bottom: 0.5rem;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }
    li {
      position: relative;
      padding-left: 0.95rem;
      color: var(--color-text-secondary);
      line-height: 1.35;
      font-size: 0.8rem;
      opacity: 0;
      transform: translateY(4px);
      transition: opacity 320ms ease, transform 320ms ease;
    }
    li.visible {
      opacity: 1;
      transform: translateY(0);
    }
    li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.55em;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--color-primary);
    }
    .sub {
      margin-top: 0.15rem;
      gap: 0.1rem;
    }
    .sub li {
      opacity: 1;
      transform: none;
      font-size: 0.68rem;
      color: var(--color-text-muted);
      padding-left: 0.75rem;
      line-height: 1.3;
    }
    .sub li::before {
      width: 3px;
      height: 3px;
      top: 0.65em;
      background: var(--color-text-muted);
    }
  `]
})
export class TwoColumnSlideComponent {
  @Input({ required: true }) slide!: Slide;
  @Input() step = 0;

  get leftCount(): number {
    return this.slide.left?.bullets.length ?? 0;
  }
}
