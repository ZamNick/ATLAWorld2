import * as THREE from 'three';

export class ResourcesLoader {

	/*-- POOLS --*/
	private imagesPool : any = { };
	
	/*-- LOADERS --*/
	private imageLoader : THREE.ImageLoader = new THREE.ImageLoader();

	public getImage(url : string) {
		return new Promise((resolve, reject) => {
			console.log(!this.imagesPool[url]);
			if(!this.imagesPool[url]) {
				this.loadImage(url).then((image) => {
					this.imagesPool[url] = image;
					resolve(image);
				}).catch(() => {
					reject();
				});
			} else {
				resolve(this.imagesPool[url]);
			}
		});
	}

	private loadImage(url : string) {
		return new Promise((resolve, reject) => {
			this.imageLoader.load(url, (image) => {
				resolve(image);
			}, (xhr) => {
				console.log('[' + Math.round(xhr.loaded / xhr.total * 100) + '%] ' + url);
			}, () => {
				console.log('Something going wrong. Error occured while loading image: ' + url);
				reject();
			});
		});
	}
}