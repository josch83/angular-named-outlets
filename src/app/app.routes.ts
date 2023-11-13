import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'one',
        loadChildren: () => import('./one/one.routes').then(m => m.routes)
    },
    {
        path: 'two',
        loadChildren: () => import('./two/two.routes').then(m => m.routes)
    }
];
