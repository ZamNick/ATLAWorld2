import { ViewChild, Component, ElementRef } from '@angular/core';

import { CONSTANTS } from '../../constants/app.constants';

@Component({
	moduleId: module.id,
	selector: 'spinner',
	templateUrl: './resources/spinner.component.html',
	styleUrls: [
		'./resources/spinner.component.css'
	]
})
export class SpinnerComponent {

	@ViewChild('spinner') spinnerElementRef : ElementRef;

	public isShowed : boolean = true;

	public hide() {
		this.isShowed = false;
	}

	public update(loaded : number, needed : number) : void {

		let context = this.spinnerElementRef.nativeElement.getContext(CONSTANTS.SPINNER.CONTEXT);
		let centerX = this.spinnerElementRef.nativeElement.width / 2;
		let centerY = this.spinnerElementRef.nativeElement.height / 2;
		let radius = CONSTANTS.SPINNER.RADIUS;
		let endArc = 2 * Math.PI * (loaded / needed);

		context.clearRect(
			0, 
			0, 
			this.spinnerElementRef.nativeElement.width,
			this.spinnerElementRef.nativeElement.height
		);

		context.translate(centerX, centerY);
		context.rotate(-Math.PI / 2);
		context.translate(-centerX, -centerY);

		context.beginPath();
		context.arc(centerX, centerY, radius, 0, endArc, false);
		context.lineWidth = CONSTANTS.SPINNER.LOADED.LINE_WIDTH;
		context.strokeStyle = CONSTANTS.SPINNER.LOADED.STROKE_STYLE;
		context.shadowColor = CONSTANTS.SPINNER.LOADED.SHADOW_COLOR;
		context.shadowBlur = CONSTANTS.SPINNER.LOADED.SHADOW_BLUR;
		context.stroke();
		context.beginPath();
		context.arc(centerX, centerY, radius, endArc, 2 * Math.PI, false);
		context.lineWidth = CONSTANTS.SPINNER.NEEDED.LINE_WIDTH;
		context.strokeStyle = CONSTANTS.SPINNER.NEEDED.STROKE_STYLE;
		context.stroke();

		context.translate(centerX, centerY);
		context.rotate(Math.PI / 2);
		context.translate(-centerX, -centerY);
	}

}