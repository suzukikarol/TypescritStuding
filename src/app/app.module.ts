import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreTypeComponent } from './sobre-type/sobre-type.component';
import { FirstStepComponent } from './first-step/first-step.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    SobreTypeComponent,
    FirstStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
