import { PublicArrayContainer } from '@writetome51/public-array-container';
import { getFilteredResults } from '@writetome51/array-get-filtered-results';
import { isArray } from 'basic-data-handling/isArray_notArray';
import { errorIfNotString } from 'basic-data-handling/errorIfNotString';
import { append } from '@writetome51/array-append-prepend/append-prepend';


export class PublicArrayFilter extends PublicArrayContainer {

	constructor(data: any[] = []) {
		super(data);
	}


	// These methods all narrow down the content of the array and return the class instance.


	byTest(testFunction: (currentValue, currentIndex?, array?) => boolean): this {
		let filteredResults = getFilteredResults(testFunction, this.data);
		// It's import we replace all the contents of this.data this way, so its reference isn't broken:
		this.data.length = 0;
		return this.returnThis_after(append(filteredResults, this.data));
	}


	byType(type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'): this {
		errorIfNotString(type);
		// @ts-ignore
		type = type.toLowerCase();
		if (type === 'array') return this.byTest((item) => isArray(item));

		else return this.byTest((item) => typeof item === type);
	}


}
