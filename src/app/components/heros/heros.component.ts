import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.scss',
})
export class HerosComponent implements OnInit, AfterViewInit {
  titulo = 'Hello World';
  disableInput = true;
  @ViewChild('miH1') miH1: ElementRef | undefined;

  ngOnInit(): void {
    setTimeout(() => {
      this.titulo = 'Hola desde ngOnInit';
      this.disableInput = false;
    }, 1500);
    console.log(this.miH1);
  }

  ngAfterViewInit(): void {
    console.log(this.miH1);
    if (this.miH1 != undefined) {
      this.miH1.nativeElement.innerText = 'Hola desde ngAfterViewInit';
    }
  }

  getSuma(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }

  showMessage() {
    console.log('Esto es un mensaje');
  }

  keyUp(event: KeyboardEvent) {
    // console.log(event.key);
    this.titulo += event.key;
  }
}
