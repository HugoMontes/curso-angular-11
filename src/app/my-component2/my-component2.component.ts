import {
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  OnInit,
} from '@angular/core';
import { MyComponent1Component } from '../my-component1/my-component1.component';

@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrl: './my-component2.component.scss',
})
export class MyComponent2Component
  implements OnInit, DoCheck, AfterContentInit
{
  @ContentChild('childComponent2') contentChild:
    | MyComponent1Component
    | undefined;

  ngOnInit(): void {
    console.log('--COMPONENTE 2 - ngOnInit');
    console.log(this.contentChild);
  }

  ngDoCheck(): void {
    console.log('--COMPONENTE 2 - ngDoCheck');
    console.log(this.contentChild);
  }

  ngAfterContentInit(): void {
    console.log('--COMPONENTE 2 - ngAfterContentInit');
    console.log(this.contentChild);
  }
}
