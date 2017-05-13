export const CONSTANTS = {

	CAMERA: {
		FRUSTUM: 45,
		ASPECT_RATIO: window.innerWidth / window.innerHeight,
		NEAR: 1,
		FAR: 10000,
		START_Z_POSITION: 2200
	},

	SCALE: {
		MAX: 2200,
		MIN: 700,
		DELTA: 10
	},

	MAP: {
		SETTINGS: {
			URL: 'app/assets/img/map.png',
			SEGMENTS: 32
		},
		IMAGES: [
			'app/assets/img/map.png',
			'app/assets/img/cloud_1.png',
			'app/assets/img/cloud_2.png',
			'app/assets/img/cloud_3.png',
			'app/assets/img/cloud_4.png',
			'app/assets/img/waterMarker.png',
			'app/assets/img/airMarker.png',
			'app/assets/img/earthMarker.png',
			'app/assets/img/fireMarker.png'
		]
	},

	SPINNER: {
		CONTEXT: '2d',
		RADIUS: 50,
		LOADED: {
			LINE_WIDTH: 5,
			STROKE_STYLE: 'lightblue',
			SHADOW_COLOR: 'white',
			SHADOW_BLUR: 20
		},
		NEEDED: {
			LINE_WIDTH: 1,
			STROKE_STYLE: 'white'
		}
	}

};