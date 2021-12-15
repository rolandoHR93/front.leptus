import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FuseCardModule } from '@fuse/components/card';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { PriceComponent } from './price/price.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { FeaturesComponent } from './features/features.component';
import { CtaComponent } from './cta/cta.component';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    PriceComponent,
    FooterComponent,
    CardsComponent,
    FeaturesComponent,
    CtaComponent,
    QuestionsComponent,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    CardsComponent,
    PriceComponent,
    FooterComponent,
    FeaturesComponent,
    CtaComponent,
    QuestionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    FuseCardModule,

  ]
})
export class SharedHomeModule { }
