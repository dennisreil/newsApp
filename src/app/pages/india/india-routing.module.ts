import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiaPage } from './india.page';

const routes: Routes = [
  {
    path: '',
    component: IndiaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndiaPageRoutingModule {}
