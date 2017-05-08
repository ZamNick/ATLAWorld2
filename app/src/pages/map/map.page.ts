import { Component } from '@angular/core';
import * as THREE from 'three';

import { CONSTANTS } from '../../constants/app.constants';

@Component({
	moduleId: module.id,
	templateUrl: './resources/map.page.html'
})
export class MapPage {

	private scene    : THREE.Scene     = null;
	private camera   : THREE.Camera    = null;
	private renderer : THREE.Renderer  = null;

	ngOnInit() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(
			CONSTANTS.CAMERA.FRUSTUM,
			CONSTANTS.CAMERA.ASPECT_RATIO,
			CONSTANTS.CAMERA.NEAR,
			CONSTANTS.CAMERA.FAR
		);
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.getElementsByClassName('scene')[0].appendChild(this.renderer.domElement);
	}

}