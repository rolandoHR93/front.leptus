/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboard',
        title   : 'Dashboard',
        subtitle: 'Acceso Rápido',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dashboard.administracion',
                title: 'Administración',
                type : 'collapsable',
                icon : 'heroicons_outline:menu-alt-2',
                children: [
                    {
                        id   : 'dashboard.administracion.usuarios',
                        title: 'Usuarios',
                        type : 'basic',
                        icon : 'heroicons_outline:user-group',
                        link : '/dashboard/administracion/usuarios',
                    },
                    {
                        id   : 'dashboard.administracion.cliene',
                        title: 'Cliente',
                        type : 'basic',
                        icon : 'heroicons_outline:minus-sm',
                        link : '/dashboard/administracion/cliene',
                    },
                    {
                        id   : 'dashboard.administracion.personalInterno',
                        title: 'Personal Interno',
                        type : 'basic',
                        icon : 'heroicons_outline:minus-sm',
                        link : '/dashboard/administracion/personalInterno',
                    },
                    {
                        id   : 'dashboard.administracion.servicios',
                        title: 'Servicios',
                        type : 'basic',
                        icon : 'heroicons_outline:minus-sm',
                        link : '/dashboard/administracion/servicios',
                    },
                    {
                        id   : 'dashboard.administracion.modulos',
                        title: 'Módulos',
                        type : 'basic',
                        icon : 'heroicons_outline:minus-sm',
                        link : '/dashboard/administracion/modulos',
                    },
                    {
                        id   : 'dashboard.administracion.permisos',
                        title: 'Permisos',
                        type : 'basic',
                        icon : 'heroicons_outline:minus-sm',
                        link : '/dashboard/administracion/permisos',
                    },
                ]
            },
            {
                id   : 'dashboard.ventas',
                title: 'Compras',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/dashboard/compras'
            },
            {
                id   : 'dashboard.ventas',
                title: 'Ventas',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/dashboard/ventas'
            },
            {
                id   : 'dashboard.facturacion',
                title: 'Devoluciones',
                type : 'basic',
                icon : 'heroicons_outline:currency-dollar',
                link : '/dashboard/facturacion'
            },
            {
                id   : 'dashboard.facturacion',
                title: 'Facturación',
                type : 'basic',
                icon : 'heroicons_outline:currency-dollar',
                link : '/dashboard/facturacion'
            },
            {
                id   : 'dashboard.analytics',
                title: 'Gastos',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboard/analytics'
            },
            {
                id   : 'dashboard.analytics',
                title: 'Análisis',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboard/analytics'
            },
            {
                id   : 'dashboard.settings',
                title: 'Ajustes',
                type : 'basic',
                icon : 'heroicons_outline:cog',
                link : '/dashboard/settings'
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
