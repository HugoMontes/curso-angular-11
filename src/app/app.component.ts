import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curso-angular-11';
  show = true;

  constructor(private demoService: DemoService) {
    console.log('***APP-COMPONENT --> CONSTRUCTOR');
  }
}
