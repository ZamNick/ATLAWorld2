import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../components/app/app.component';
import { HomePage } from '../pages/home/home.page';
import { MapPage } from '../pages/map/map.page';

import { Routing } from '../routing/app.routes';

@NgModule({
	imports: [
		BrowserModule,
		Routing
	],
	declarations: [
		AppComponent,
		HomePage,
		MapPage
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }