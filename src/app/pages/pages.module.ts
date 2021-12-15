import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponentComponent } from './errors/page-not-found-component/page-not-found-component.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { PageNotAccessComponent } from './errors/page-not-access/page-not-access.component';
import { HomePageComponent } from './home/home-page/home-page.component';



@NgModule({
  declarations: [
    PageNotFoundComponentComponent,
    PageNotFoundComponent,
    PageNotAccessComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
