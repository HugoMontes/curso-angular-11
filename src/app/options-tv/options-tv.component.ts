import { Component } from '@angular/core';
import { ITv } from './../common/models/tv.interface';
import { ColorsTv, ResolutionsTV, SizesTV } from './../common/models/tv.type';

@Component({
  selector: 'app-options-tv',
  templateUrl: './options-tv.component.html',
  styleUrl: './options-tv.component.scss',
})
export class OptionsTvComponent {
  colors: ColorsTv[] = ['#f44336', '#e91e63', '#9c27b0'];
  sizes: SizesTV[] = [
    '10 pulgadas',
    '19 pulgadas',
    '24 pulgadas',
    '32 pulgadas',
    '40 pulgadas',
  ];
  resolutions: ResolutionsTV[] = ['4K ULTRA HD', 'HD', 'FULL HD', '8K'];
  optionsTv: ITv = {} as ITv;
}
