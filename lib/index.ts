import { PublicArrayContainer } from '@writetome51/public-array-container';
import { isArray } from 'basic-data-handling/isArray_notArray';
import { errorIfNotString } from 'basic-data-handling/errorIfNotString';
import { setArray } from '@writetome51/set-array';
import { getArrayFromProperty } from '@writetome51/get-array-from-property';
import { getByTest } from '@writetome51/array-get-by-test';


export class PublicArrayFilter extends PublicArrayContainer {

	constructor(data: any[] = []) {
		super(data);
	}


	// These methods all narrow down the content of the array and return the class instance.


	byTest(testFunction: (item, index?, array?) => boolean): this {

		// each object in filteredResults matches this interface: {value: any, index: integer}
		let filteredResults = getByTest(testFunction, this.data);

		let values = getArrayFromProperty('value', filteredResults);
		return this._returnThis_after(setArray(this.data, values));
	}


	byType(type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'): this {
		errorIfNotString(type);
		// @ts-ignore
		type = type.toLowerCase();
		if (type === 'array') return this.byTest((item) => isArray(item));

		else return this.byTest((item) => typeof item === type);
	}


}
