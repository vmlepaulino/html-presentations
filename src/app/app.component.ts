import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SlideContainerComponent } from './components/slide-container/slide-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SlideContainerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-slide-container />`
})
export class AppComponent {}
