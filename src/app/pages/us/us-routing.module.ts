import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsPage } from './us.page';

const routes: Routes = [
  {
    path: '',
    component: UsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsPageRoutingModule {}
