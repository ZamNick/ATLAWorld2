import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	templateUrl: './resources/home.page.html',
	styleUrls: [ './resources/home.page.css' ]
})
export class HomePage {
	public currentDate : Date = new Date();
}