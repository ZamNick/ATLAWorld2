import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../pages/home/home.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent }	
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);