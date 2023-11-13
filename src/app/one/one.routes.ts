import { Routes } from '@angular/router';
import { OneSideComponent } from './one-side/one-side.component';
import { OneMainComponent } from './one-main/one-main.component';

export const routes: Routes = [
    {
        path: '',
        component: OneMainComponent
    },
    {
        path: 'demo1', 
        component: OneSideComponent, 
        outlet: 'side'
    }
];