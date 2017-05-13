import { Component, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';

import { CONSTANTS } from '../../constants/app.constants';

import { SpinnerComponent } from '../../components/spinner/spinner.component';

import { ImageLoader } from '../../services/loaders/imageLoader/imageLoader.service';

@Component({
	moduleId: module.id,
	templateUrl: './resources/map.page.html'
})
export class MapPage {

	@ViewChild('spinner') spinnerComponent  : SpinnerComponent;
	@ViewChild('scene')   sceneElementRef 	: ElementRef;

	private scene    : THREE.Scene     = null;
	private camera   : THREE.Camera    = null;
	private renderer : THREE.Renderer  = null;

	constructor(private imageLoader : ImageLoader) { }

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
		this.sceneElementRef.nativeElement.appendChild(this.renderer.domElement);

		this.imageLoader.loadAll(CONSTANTS.MAP.IMAGES, this.spinnerComponent).then(() => {
			
			this.spinnerComponent.hide();

			let texture = new THREE.Texture();

			texture.image = this.imageLoader.get(CONSTANTS.MAP.SETTINGS.URL);
			texture.needsUpdate = true;

			let geometry = new THREE.PlaneGeometry(
				texture.image.naturalWidth,
				texture.image.naturalHeight,
				CONSTANTS.MAP.SETTINGS.SEGMENTS
			);

			let material = new THREE.MeshBasicMaterial({
				map: texture,
				side: THREE.DoubleSide
			});

			let map = new THREE.Mesh(geometry, material);

			this.scene.add(map);
		});

		this.camera.position.z = 2200;

		let self = this;


		/*-- JavaScript injection --*/
		(function animate() {
			requestAnimationFrame(animate);
			self.renderer.render(self.scene, self.camera);
		})();
	}
}