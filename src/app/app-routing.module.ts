import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/errors/page-not-found/page-not-found.component';
// import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { HomeRoutingModule } from './pages/home/home-page/home.routing';

const routes: Routes = [
    // { path: '/auth', redirectTo: '/auth', pathMatch: 'full'},


    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'login',
        loadChildren: () =>
          import('./pages/auth/login/login.module').then(
            (m) => m.LoginModule
          ),
    },
    // { path: '', component: HomePageComponent },
    // { path: 'home', component: HomePageComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeRoutingModule,
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
