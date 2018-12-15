import { PublicArrayContainer } from '@writetome51/public-array-container';


export declare class PublicArrayFilter extends PublicArrayContainer {

	constructor(data?: any[]);


	byTest(testFunction: (item: any, index?: number, array?: any[]) => boolean): this;


	byType(type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'): this;
}
