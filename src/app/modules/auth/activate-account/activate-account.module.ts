import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { ActivateAccountComponent } from './activate-account.component';
import { activateAccountRoutes } from './activate-account.routing';

@NgModule({
    declarations: [
        ActivateAccountComponent
    ],
    imports     : [
        RouterModule.forChild(activateAccountRoutes),
        MatButtonModule,
        FuseCardModule,
        SharedModule
    ]
})
export class ActivateAccountModule
{
}
