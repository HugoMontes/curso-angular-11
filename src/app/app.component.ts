import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curso-angular-11';

  constructor() {
    console.log('APP-COMPONENT >> CONSTRUCTOR');
  }

  getMessage(value: string): void {
    console.log(value);
  }
}
