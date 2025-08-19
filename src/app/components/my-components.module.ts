import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MyComponent1Component } from './my-component1/my-component1.component';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { MyComponent3Component } from './my-component3/my-component3.component';
import { HerosComponent } from './heros/heros.component';
import { MyComponent4Component } from './my-component4/my-component4.component';
import localeEsBo from '@angular/common/locales/es-BO';
import { CustomCurrencyPipe } from './custom-currency.pipe';

registerLocaleData(localeEsBo);

@NgModule({
  declarations: [
    MyComponent1Component,
    MyComponent2Component,
    MyComponent3Component,
    MyComponent4Component,
    HerosComponent,
    CustomCurrencyPipe,
  ],
  imports: [CommonModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-BO' }],
  exports: [
    MyComponent1Component,
    MyComponent2Component,
    MyComponent3Component,
    HerosComponent,
  ],
})
export class MyComponentsModule {}
