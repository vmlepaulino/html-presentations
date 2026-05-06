import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../models/slide.model';

@Component({
  selector: 'app-references-slide',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="refs">
      @if (slide.eyebrow) { <div class="eyebrow">{{ slide.eyebrow }}</div> }
      <h2>{{ slide.title }}</h2>

      <div class="grid">
        @for (group of slide.referenceGroups; track group.category) {
          <div class="card">
            <h3>{{ group.category }}</h3>
            <ul>
              @for (link of group.links; track link.url) {
                <li>
                  <a [href]="link.url" target="_blank" rel="noopener noreferrer">
                    {{ link.label }}
                    <span class="ext">↗</span>
                  </a>
                </li>
              }
            </ul>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .refs {
      max-width: min(96vw, 1600px);
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
      margin-bottom: 2rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.25rem;
    }
    .card {
      background: #fff;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 1.25rem 1.5rem;
      box-shadow: var(--shadow-card);
    }
    h3 {
      font-size: var(--font-size-base);
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: 0.75rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--color-border);
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    a {
      color: var(--color-text-secondary);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 150ms ease;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }
    a:hover {
      color: var(--color-primary);
    }
    .ext { font-size: 0.7rem; opacity: 0.7; }
  `]
})
export class ReferencesSlideComponent {
  @Input({ required: true }) slide!: Slide;
}
