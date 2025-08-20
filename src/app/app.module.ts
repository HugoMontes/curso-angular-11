import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MyComponentsModule } from './components/my-components.module';
import { DemoService } from './demo.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    MatButtonModule,
    MyComponentsModule,
  ],
  providers: [provideAnimationsAsync(), DemoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
