import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from '../pages/home/home.page';
import { MapPage } from '../pages/map/map.page';

const routes: Routes = [
	{ path: '', component: HomePage },
	{ path: 'map', component: MapPage }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);