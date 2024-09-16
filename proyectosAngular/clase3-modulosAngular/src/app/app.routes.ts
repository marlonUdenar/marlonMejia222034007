import { Routes } from '@angular/router';
import { MyTestComponentComponent } from './/my-test-component/my-test-component.component';
import { ServiciosComponent } from './servicios/servicios.component';

export const routes: Routes = [
    {
        path:'',
        component: MyTestComponentComponent
    },
    {
        path:'Auth',
        component: ServiciosComponent
    }
];
