import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-heros-directive-struct',
  templateUrl: './heros-directive-struct.component.html',
  styleUrl: './heros-directive-struct.component.scss',
})
export class HerosDirectiveStructComponent implements OnInit, AfterViewInit {
  @ViewChild('miBoton') miBoton: ElementRef | undefined;
  showButtonSave = false;
  myArrayHeroes = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'Spiderman' },
  ];

  constructor(private detecChange: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log(this.miBoton);

    setTimeout(() => {
      this.showButtonSave = true;
      this.detecChange.detectChanges();
      console.log(this.miBoton);
    }, 1500);
  }

  ngAfterViewInit(): void {
    console.log(this.miBoton);
  }
}
