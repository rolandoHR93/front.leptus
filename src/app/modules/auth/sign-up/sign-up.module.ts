import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from 'app/shared/shared.module';
import { AuthSignUpComponent } from './sign-up.component';

export const routes: Route[] = [
    {
        path     : '',
        component: AuthSignUpComponent
    }
];

@NgModule({
    declarations: [
        AuthSignUpComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatMomentDateModule,
        MatSelectModule,
        MatStepperModule,
        SharedModule
    ]
})
export class AuthSignUpModule
{
}
