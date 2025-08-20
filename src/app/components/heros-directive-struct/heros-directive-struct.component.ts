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
  textoInput = '';
  heroeSeleccionado: IHeroe = { id: 0, name: '' } as IHeroe;
  myArrayHeroes: IHeroe[] = [
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

  addHero() {
    // Obtener el id mayor
    const objetoMayor = this.myArrayHeroes.reduce((prev, current) =>
      prev.id > current.id ? prev : current,
    );
    // Añadir un nuevo heroe
    this.myArrayHeroes.push({ id: objetoMayor.id + 1, name: this.textoInput });
  }

  actualizarHeroes() {
    this.myArrayHeroes = [
      { id: 1, name: 'SUPERMAN' },
      { id: 2, name: 'Batman' },
      { id: 3, name: 'Spiderman' },
    ];
  }

  trackByHero(index: number, hero: IHeroe): number {
    return hero.id;
  }

  seleccionarHeroe(heroe: IHeroe): void {
    this.heroeSeleccionado = heroe;
    console.log(this.heroeSeleccionado);
  }
}

interface IHeroe {
  id: number;
  name: string;
}
