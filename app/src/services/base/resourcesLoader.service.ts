import * as THREE from 'three';

import { SpinnerComponent } from '../../components/spinner/spinner.component';

export class ResourcesLoader {
    protected pool 														: Object = { };
	protected loader 													: any;
	public get(url : string) 											: any { }
	public loadAll(
		urls : Array<string>, 
		spinner? : SpinnerComponent
	)   																: Promise<any> {
		return new Promise((resolve, reject) => { });
	}
	public loadOne(url : string) 										: Promise<any> {
		return new Promise((resolve, reject) => { });
	}
}