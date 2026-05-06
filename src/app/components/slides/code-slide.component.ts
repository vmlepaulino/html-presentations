import { Component, Input, ChangeDetectionStrategy, signal, computed, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../models/slide.model';

@Component({
  selector: 'app-code-slide',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="code-slide">
      @if (slide.eyebrow) { <div class="eyebrow">{{ slide.eyebrow }}</div> }
      <h2>{{ slide.title }}</h2>
      @if (slide.description) { <p class="desc">{{ slide.description }}</p> }

      @if (slide.codeTabs && slide.codeTabs.length) {
        <div class="tabs" role="tablist">
          @for (tab of slide.codeTabs; track $index; let i = $index) {
            <button
              type="button"
              role="tab"
              class="tab"
              [class.active]="active() === i"
              [attr.aria-selected]="active() === i"
              (click)="select($event, i)">
              {{ tab.label }}
            </button>
          }
        </div>

        @if (current(); as tab) {
          @if (tab.description) { <p class="tab-desc">{{ tab.description }}</p> }
          @for (block of tab.codeBlocks; track $index) {
            <div class="block">
              <div class="lang">{{ block.language }}</div>
              <pre><code>{{ block.code }}</code></pre>
            </div>
          }
        }
      } @else {
        @for (block of slide.codeBlocks; track $index) {
          <div class="block">
            <div class="lang">{{ block.language }}</div>
            <pre><code>{{ block.code }}</code></pre>
          </div>
        }
      }
    </div>
  `,
  styles: [`
    .code-slide {
      max-width: min(96vw, 1500px);
      margin: 0 auto;
      padding: 1.5rem 2rem;
      width: 100%;
    }
    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-primary);
      font-weight: 600;
      font-size: 0.75rem;
      margin-bottom: 0.4rem;
    }
    h2 {
      font-size: var(--font-size-lg);
      font-weight: 600;
      margin-bottom: 0.4rem;
    }
    .desc {
      color: var(--color-text-secondary);
      margin-bottom: 0.75rem;
      font-size: var(--font-size-sm);
    }
    .tabs {
      display: flex;
      gap: 0.25rem;
      border-bottom: 1px solid var(--color-border);
      margin-bottom: 0.6rem;
      flex-wrap: wrap;
    }
    .tab {
      appearance: none;
      background: transparent;
      border: none;
      border-bottom: 2px solid transparent;
      padding: 0.3rem 0.7rem;
      font: inherit;
      font-size: 0.7rem;
      font-weight: 500;
      color: var(--color-text-secondary);
      cursor: pointer;
      transition: color 150ms ease, border-color 150ms ease, background 150ms ease;
      border-radius: 4px 4px 0 0;
    }
    .tab:hover {
      color: var(--color-primary);
      background: var(--color-primary-light);
    }
    .tab.active {
      color: var(--color-primary);
      border-bottom-color: var(--color-primary);
      font-weight: 600;
    }
    .tab-desc {
      color: var(--color-text-secondary);
      margin-bottom: 0.4rem;
      font-size: 0.72rem;
      font-style: italic;
    }
    .block { margin-bottom: 0.5rem; }
    .lang {
      display: inline-block;
      padding: 1px 8px;
      background: var(--color-surface-alt);
      color: var(--color-text-muted);
      font-size: 0.65rem;
      border-radius: 4px;
      margin-bottom: 0.25rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
  `]
})
export class CodeSlideComponent implements OnChanges {
  @Input({ required: true }) slide!: Slide;

  readonly active = signal(0);
  readonly current = computed(() => this.slide.codeTabs?.[this.active()]);

  ngOnChanges(): void {
    this.active.set(0);
  }

  select(ev: Event, i: number): void {
    ev.stopPropagation();   // prevent the slide-container click → next slide
    this.active.set(i);
  }
}
