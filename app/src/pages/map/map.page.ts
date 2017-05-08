import { Component } from '@angular/core';

import { CONSTANTS } from '../../constants/app.constants';

@Component({
	moduleId: module.id,
	templateUrl: './resources/map.page.html'
})
export class MapPage {

	public scene : any = null;

	ngOnInit() {
		// this.scene = new THREE.Scene();
	}

}