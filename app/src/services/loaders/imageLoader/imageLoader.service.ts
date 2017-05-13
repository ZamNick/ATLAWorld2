import * as THREE from 'three';

import { ResourcesLoader } from '../../base/resourcesLoader.service';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';

export class ImageLoader extends ResourcesLoader {

	constructor() {
		super();		
		this.loader = new THREE.ImageLoader();
	}

	public get(url : string) : any {
		if(!this.pool[url]) throw new Error('There is no image with current url was uploaded.');
		return this.pool[url];
	}

	public loadAll(urls : Array<string>, spinner? : SpinnerComponent) {
		
		let self = this;
		let loaded = 0;

		/* NOOP PROMISE */
		let promise = new Promise((resolve) => resolve());

		for(let url of urls) {
			(function(url) {
				promise = promise.then(() => {
					spinner.update(loaded++, urls.length);
					return self.loadOne(url);
				});
			})(url);
		}

		return promise.then(() => {
			spinner.update(loaded, urls.length);
		});
	}

	public loadOne(url : string) {
		return new Promise((resolve, reject) => {
			if(!this.pool[url]) {
				this.loader.load(url, (image : any) => {
					this.pool[url] = image;
					resolve(image);
				}, (xhr : any) => {
					console.log('[' + Math.round(xhr.loaded / xhr.total * 100) + '%] ' + url);
				}, (error : any) => {
					console.log('Something going wrong. Error occured while loading image: ' + url);
					reject(error);
				});
			} else {
				resolve(this.pool[url]);
			}
		});
	}
}