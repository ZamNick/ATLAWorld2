import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../components/app/app.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';

import { HomePage } from '../pages/home/home.page';
import { MapPage } from '../pages/map/map.page';

import { Routing } from '../routing/app.routes';

import { ImageLoader } from '../services/loaders/imageLoader/imageLoader.service';

@NgModule({
	imports: [
		BrowserModule,
		Routing
	],
	declarations: [
		AppComponent,
		SpinnerComponent,
		HomePage,
		MapPage
	],
	providers: [
		ImageLoader
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }