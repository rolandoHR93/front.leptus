import { Route } from '@angular/router';
import { ServicioComponent } from './servicio/servicio.component';
export const serviciosRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'inventory',

        children : [
            {
                path     : '',
                component: ServicioComponent,

            }
        ]
    },
];
