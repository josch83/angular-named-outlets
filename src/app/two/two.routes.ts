import { Routes } from '@angular/router';
import { TwoSideComponent } from './two-side/two-side.component';
import { TwoMainComponent } from './two-main/two-main.component';
import { TwoChildComponent } from './two-child/two-child.component';

export const routes: Routes = [
    {
        path: '',
        component: TwoMainComponent
    },
    {
        path: 'child/:id',
        //component: TwoChildComponent,
        children: [
            {
                path: 'demo2', 
                component: TwoSideComponent, 
                outlet: 'side'
            },
            {
                path: '',
                component: TwoChildComponent,
            }
        ]
    },
    {
        path: 'demo2', 
        component: TwoSideComponent, 
        outlet: 'side'
    }
];