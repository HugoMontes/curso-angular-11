import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnChanges, OnInit {
  title = 'curso-angular-11';

  constructor() {
    console.log('APP-COMPONENT >> CONSTRUCTOR');
  }

  ngOnInit(): void {
    console.log('APP-COMPONENT >> ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('APP-COMPONENT >> ngOnChanges');
    console.log(changes);
  }

  getMessage(value: string): void {
    console.log(value);
  }

  clickChangeTitle(): void {
    this.title = 'CAMBIANDO.....';
  }
}
