import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../models/slide.model';

@Component({
  selector: 'app-bullets-slide',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bullets-slide">
      @if (slide.eyebrow) {
        <div class="eyebrow">{{ slide.eyebrow }}</div>
      }
      <h2>{{ slide.title }}</h2>
      <ul>
        @for (b of slide.bullets; track $index; let i = $index) {
          <li [class.visible]="i < step">
            <span class="dot"></span>
            <span class="text">{{ b.text }}</span>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .bullets-slide {
      max-width: min(96vw, 1500px);
      margin: 0 auto;
      padding: 3rem 2rem;
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
      letter-spacing: -0.01em;
      margin-bottom: 2rem;
      color: var(--color-text);
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    li {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      font-size: var(--font-size-md);
      color: var(--color-text-secondary);
      opacity: 0;
      transform: translateY(6px);
      transition: opacity 350ms ease, transform 350ms ease;
    }
    li.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .dot {
      flex: 0 0 auto;
      width: 8px;
      height: 8px;
      margin-top: 0.55rem;
      border-radius: 50%;
      background: var(--color-primary);
      box-shadow: 0 0 0 3px var(--color-primary-light);
    }
    .text {
      flex: 1;
      line-height: 1.55;
    }
  `]
})
export class BulletsSlideComponent {
  @Input({ required: true }) slide!: Slide;
  @Input() step = 0;
}
