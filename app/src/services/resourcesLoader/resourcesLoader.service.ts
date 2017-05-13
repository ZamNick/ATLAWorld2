import * as THREE from 'three';

import { SpinnerComponent } from '../../components/spinner/spinner.component';

export class ResourcesLoader {

	/*-- POOLS --*/
	private imagesPool : any = { };
	
	/*-- LOADERS --*/
	private imageLoader : THREE.ImageLoader = new THREE.ImageLoader();

	public getImage(url : string) {
		if(!this.imagesPool[url]) throw new Error('There is no image with current url was uploaded.');
		return this.imagesPool[url];
	}

	public loadImages(urls : Array<string>, spinner? : SpinnerComponent) {
		
		let self = this;
		let loaded = 0;

		/* NOOP PROMISE */
		let promise = new Promise((resolve) => resolve());

		for(let url of urls) {
			(function(url) {
				promise = promise.then(() => {
					spinner.update(loaded++, urls.length);
					return self.loadImage(url);
				});
			})(url);
		}

		return promise.then(() => {
			spinner.update(loaded, urls.length);
		});
	}

	private loadImage(url : string) {
		return new Promise((resolve, reject) => {
			if(!this.imagesPool[url]) {
				this.imageLoader.load(url, (image) => {
					this.imagesPool[url] = image;
					resolve(image);
				}, (xhr) => {
					console.log('[' + Math.round(xhr.loaded / xhr.total * 100) + '%] ' + url);
				}, (error) => {
					console.log('Something going wrong. Error occured while loading image: ' + url);
					reject(error);
				});
			} else {
				resolve(this.imagesPool[url]);
			}
		});
	}
}