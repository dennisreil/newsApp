import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsPage } from './us.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { UsPageRoutingModule } from './us-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: UsPage }]),
    UsPageRoutingModule,
  ],
  declarations: [UsPage]
})
export class UsPageModule {}
