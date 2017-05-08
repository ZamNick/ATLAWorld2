import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from '../pages/home/home.page';

const routes: Routes = [
	{ path: '', component: HomePage }	
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);