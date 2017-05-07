import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../components/app.component';
import { HomePageComponent } from '../pages/home/home.component';

import { Routing } from '../routing/app.routes';

@NgModule({
	imports: [
		BrowserModule,
		Routing
	],
	declarations: [
		AppComponent,
		HomePageComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
	
}