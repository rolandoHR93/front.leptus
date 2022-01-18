import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { serviciosRoutes } from './servicios.routing';
import { ServicioComponent } from './servicio/servicio.component';

@NgModule({
    declarations: [
        ServicioComponent,
    ],
    imports     : [
        RouterModule.forChild(serviciosRoutes),
        // MatButtonModule,
        // MatCheckboxModule,
        // MatFormFieldModule,
        // MatIconModule,
        // MatInputModule,
        // MatMenuModule,
        // MatPaginatorModule,
        // MatProgressBarModule,
        // MatRippleModule,
        // MatSortModule,
        // MatSelectModule,
        // MatSlideToggleModule,
        // MatTooltipModule,
        // SharedModule
    ]
})
export class ServiciosModule
{
}
