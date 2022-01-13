/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from 'app/core/guards/auth/auth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';


const routes: Routes = [
    {
        path       : 'dashboard',
        canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children : [
            {
                path     : 'administracion',
                children   : [
                    {path: 'usuarios', loadChildren: () => import('app/modules/contacts/contacts.module').then(m => m.ContactsModule)},
                ]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulosRoutingModule {}
