import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreTypeComponent } from './sobre-type/sobre-type.component';
import { FirstStepComponent } from './first-step/first-step.component';

const routes: Routes = [
  {path:"sobre", component:SobreTypeComponent},
  {path:"first", component:FirstStepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent = [SobreTypeComponent]
