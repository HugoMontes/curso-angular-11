import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrl: './my-component1.component.scss',
})
export class MyComponent1Component {
  @Input() title: string | undefined;
  @Output() sendMessage = new EventEmitter<string>();

  clickSentMessageToFather(): void {
    this.sendMessage.emit('Yo soy tu hijo');
  }
}
