import { MyComponent1Component } from './my-component1/my-component1.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MyComponent2Component } from './my-component2/my-component2.component';

@NgModule({
  declarations: [AppComponent, MyComponent1Component, MyComponent2Component],
  imports: [BrowserModule, RouterModule.forRoot([]), MatButtonModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
