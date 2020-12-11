import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-main-toolbar [appName]="title"></app-main-toolbar>
    <div id="content">
        <router-outlet></router-outlet>
    </div>
    <br>
    <app-main-footer></app-main-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'traveler.moe';
}
