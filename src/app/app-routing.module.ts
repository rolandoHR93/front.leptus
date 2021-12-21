import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/errors/page-not-found/page-not-found.component';
import { HomeRoutingModule } from './pages/home/home-page/home.routing';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent },

    {
        path: 'login',
        loadChildren: ()=>
            import('./pages/auth/login/login.module')
                .then(mod => mod.LoginModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeRoutingModule,
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
