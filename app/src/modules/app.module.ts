import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../components/app/app.component';
import { HomePage } from '../pages/home/home.page';

import { Routing } from '../routing/app.routes';

@NgModule({
	imports: [
		BrowserModule,
		Routing
	],
	declarations: [
		AppComponent,
		HomePage
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }