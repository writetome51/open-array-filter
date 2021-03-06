import { PublicArrayContainer } from '@writetome51/public-array-container';


export declare class PublicArrayFilter extends PublicArrayContainer {


	byTest(testFunction: (item: any, index?: number, array?: any[]) => boolean): this;


	byType(
		type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined' | 'null'
	): this;
}
