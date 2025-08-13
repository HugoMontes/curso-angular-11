import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-component4',
  templateUrl: './my-component4.component.html',
  styleUrl: './my-component4.component.scss',
})
export class MyComponent4Component {
  @Input() titulo: string | undefined;
}
