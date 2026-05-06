import { Component, ChangeDetectionStrategy, HostListener, inject, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

import { SlideService } from '../../services/slide.service';
import { PRESENTER_SCRIPTS, type PresenterScript } from '../../data/presenter-scripts.data';
import { TitleSlideComponent } from '../slides/title-slide.component';
import { BulletsSlideComponent } from '../slides/bullets-slide.component';
import { TwoColumnSlideComponent } from '../slides/two-column-slide.component';
import { ArchitectureSlideComponent } from '../slides/architecture-slide.component';
import { QuoteSlideComponent } from '../slides/quote-slide.component';
import { CodeSlideComponent } from '../slides/code-slide.component';
import { SectionSlideComponent } from '../slides/section-slide.component';
import { ReferencesSlideComponent } from '../slides/references-slide.component';

@Component({
  selector: 'app-slide-container',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TitleSlideComponent,
    BulletsSlideComponent,
    TwoColumnSlideComponent,
    ArchitectureSlideComponent,
    QuoteSlideComponent,
    CodeSlideComponent,
    SectionSlideComponent,
    ReferencesSlideComponent
  ],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <div class="stage" (click)="onStageClick($event)">
      <!-- top progress bar -->
      <div class="progress">
        <div class="progress-fill" [style.width.%]="svc.progress()"></div>
      </div>

      <!-- slide content -->
      <div class="slide-area" [class.presenter-mode]="presenterMode">
        <div class="slide-frame" *ngIf="!presenterMode" [@fade]="svc.index()" [ngSwitch]="svc.current().type">
          <app-title-slide        *ngSwitchCase="'title'"        [slide]="svc.current()" />
          <app-section-slide      *ngSwitchCase="'section'"      [slide]="svc.current()" />
          <app-bullets-slide      *ngSwitchCase="'bullets'"      [slide]="svc.current()" [step]="svc.step()" />
          <app-two-column-slide   *ngSwitchCase="'two-column'"   [slide]="svc.current()" [step]="svc.step()" />
          <app-architecture-slide *ngSwitchCase="'architecture'" [slide]="svc.current()" [step]="svc.step()" />
          <app-quote-slide        *ngSwitchCase="'quote'"        [slide]="svc.current()" />
          <app-code-slide         *ngSwitchCase="'code'"         [slide]="svc.current()" />
          <app-references-slide   *ngSwitchCase="'references'"   [slide]="svc.current()" />
        </div>

        <ng-container *ngIf="presenterMode">
          <ng-container [ngSwitch]="svc.current().type">
            <aside
              *ngSwitchCase="'two-column'"
              class="presenter-panel presenter-panel--fullscreen presenter-panel--split"
            >
              <div class="presenter-panel__header">
                <span class="presenter-panel__slide-number">Slide {{ svc.index() + 1 }} / {{ svc.total }}</span>
                <span class="presenter-panel__title">{{ svc.current().title }}</span>
              </div>

              <div class="presenter-panel__split-grid">
                <section class="presenter-panel__split-card">
                  <div class="presenter-panel__split-label">{{ svc.current().left?.title || 'Left side' }}</div>
                  <div class="presenter-panel__body presenter-panel__body--compact">
                    {{ presenterScript().left || presenterScript().body || svc.current().note || 'No script available for this slide.' }}
                  </div>
                </section>

                <section class="presenter-panel__split-card">
                  <div class="presenter-panel__split-label">{{ svc.current().right?.title || 'Right side' }}</div>
                  <div class="presenter-panel__body presenter-panel__body--compact">
                    {{ presenterScript().right || presenterScript().body || svc.current().note || 'No script available for this slide.' }}
                  </div>
                </section>
              </div>
            </aside>

            <aside *ngSwitchDefault class="presenter-panel presenter-panel--fullscreen">
              <div class="presenter-panel__header">
                <span class="presenter-panel__slide-number">Slide {{ svc.index() + 1 }} / {{ svc.total }}</span>
                <span class="presenter-panel__title">{{ svc.current().title }}</span>
              </div>
              <div class="presenter-panel__body">
                {{ presenterScript().body || svc.current().note || 'No script available for this slide.' }}
              </div>
            </aside>
          </ng-container>
        </ng-container>
      </div>

      <!-- footer with controls + slide indicator -->
      <footer class="footer">
        <div class="presenter">
          <span class="brand-dot"></span>
          From Cloud to Agents · Global Azure 2026
        </div>
        <div class="controls">
          <button class="nav-btn" (click)="prev($event)" aria-label="Previous slide">‹</button>
          <span class="indicator">{{ svc.index() + 1 }} / {{ svc.total }}</span>
          <button class="nav-btn" (click)="next($event)" aria-label="Next slide">›</button>
        </div>
      </footer>
    </div>
  `,
  styleUrl: './slide-container.component.scss'
})
export class SlideContainerComponent {
  readonly svc = inject(SlideService);
  readonly presenterScript = computed<PresenterScript>(() => PRESENTER_SCRIPTS[this.svc.index()] ?? {});
  readonly presenterMode = typeof window !== 'undefined'
    && this.isPresenterRoute(window.location.href);
  private readonly storageKey = 'presentation-current-slide';

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', this.onStorageEvent);

      if (!this.presenterMode) {
        // Only the main window writes to localStorage — presenter only reads.
        effect(() => {
          localStorage.setItem(this.storageKey, JSON.stringify({
            index: this.svc.index(),
            step: this.svc.step(),
            timestamp: Date.now()
          }));
        });
      }
    }
  }

  private onStorageEvent = (event: StorageEvent): void => {
    if (event.key !== this.storageKey || !event.newValue) return;
    try {
      const next = JSON.parse(event.newValue) as { index: number; step: number };
      if (next.index !== this.svc.index() || next.step !== this.svc.step()) {
        this.svc.index.set(next.index);
        this.svc.step.set(next.step);
      }
    } catch {
      // ignore invalid storage payload
    }
  };

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      this.svc.next();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      this.svc.prev();
    } else if (e.key === 'Home') {
      this.svc.goto(0);
    } else if (e.key === 'End') {
      this.svc.goto(this.svc.total - 1);
    }
  }

  onStageClick(e: MouseEvent): void {
    // ignore clicks on links / buttons
    const target = e.target as HTMLElement;
    if (target.closest('a, button')) return;
    this.svc.next();
  }

  next(e: Event): void { e.stopPropagation(); this.svc.next(); }
  prev(e: Event): void { e.stopPropagation(); this.svc.prev(); }

  private isPresenterRoute(href: string): boolean {
    const url = new URL(href);
    return url.searchParams.get('presenter') === 'true'
      || url.pathname.split('/').includes('presenter=true');
  }
}
