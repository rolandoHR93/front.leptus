import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const routes: Routes = [
    {
        path:'',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
          { path: '', component: HomePageComponent, data: { titulo: 'home'} },
        //   { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar'}  },
        //   { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs Observables'}  },

          // { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
