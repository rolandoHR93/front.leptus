import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';

import { SharedModule } from 'app/shared/shared.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    FuseCardModule
  ]
})
export class HomePageModule { }
