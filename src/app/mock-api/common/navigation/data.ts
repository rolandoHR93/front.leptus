/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboard',
        subtitle: 'Acceso Rápido',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dashboards.administracion',
                title: 'Administración',
                type : 'collapsable',
                icon : 'heroicons_outline:menu-alt-2',
                children: [
                    {
                        id   : 'dashboards.administracion.usuarios',
                        title: 'Usuarios',
                        type : 'basic',
                        icon : 'heroicons_outline:user-group',
                        link : '/dashboards/administracion/usuarios',
                    },
                    {
                        id   : 'dashboards.administracion.cliene',
                        title: 'Cliente',
                        type : 'basic',
                        icon : 'heroicons_outline:minus-sm',
                        link : '/dashboards/administracion/cliene',
                    },
                    {
                        id   : 'dashboards.administracion.personalInterno',
                        title: 'Personal Interno',
                        type : 'basic',
                        icon : 'heroicons_outline:minus-sm',
                        link : '/dashboards/administracion/personalInterno',
                    },
                    {
                        id   : 'dashboards.administracion.servicios',
                        title: 'Servicios',
                        type : 'basic',
                        icon : 'heroicons_outline:minus-sm',
                        link : '/dashboards/administracion/servicios',
                    },
                    {
                        id   : 'dashboards.administracion.modulos',
                        title: 'Módulos',
                        type : 'basic',
                        icon : 'heroicons_outline:minus-sm',
                        link : '/dashboards/administracion/modulos',
                    },
                    {
                        id   : 'dashboards.administracion.permisos',
                        title: 'Permisos',
                        type : 'basic',
                        icon : 'heroicons_outline:minus-sm',
                        link : '/dashboards/administracion/permisos',
                    },
                ]
            },
            {
                id   : 'dashboards.ventas',
                title: 'Ventas',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/dashboards/ventas'
            },
            {
                id   : 'dashboards.facturacion',
                title: 'Facturación',
                type : 'basic',
                icon : 'heroicons_outline:currency-dollar',
                link : '/dashboards/facturacion'
            },
            {
                id   : 'dashboards.analytics',
                title: 'Análisis',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics'
            },
            {
                id   : 'dashboards.settings',
                title: 'Settings',
                type : 'basic',
                icon : 'heroicons_outline:cog',
                link : '/dashboards/settings'
            }
        ]
    },
];

export const nodefaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example defaultNavigation',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example compactNavigation',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example futuristicNavigation',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example horizontalNavigation',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
