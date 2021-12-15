import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { SharedModule } from 'app/shared/shared.module';
import { SharedHomeModule } from '../shared/shared.module';

import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    SharedHomeModule
  ]
})
export class HomePageModule { }
