import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent
    },
    {
        path: '',
        component: MapComponent
    },
    {
        path: 'form', 
        component: FormComponent
    }
];
