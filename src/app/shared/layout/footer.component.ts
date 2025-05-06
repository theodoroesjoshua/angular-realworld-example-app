import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-layout-footer',
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class FooterComponent {
  today: number = Date.now();
}
