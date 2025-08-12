import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrl: './my-component1.component.scss',
})
export class MyComponent1Component implements OnChanges {
  @Input() title: string | undefined;
  @Output() sendMessage = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('APP-COMPONENT-1 >> ngOnChanges');
    console.log(changes);
  }

  clickSentMessageToFather(): void {
    this.sendMessage.emit('Yo soy tu hijo');
  }
}
