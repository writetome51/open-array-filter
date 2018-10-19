import { OpenArrayContainer } from '@writetome51/open-array-container/OpenArrayContainer';
import { getFilteredResults } from '@writetome51/array-get-filtered-results';
import { isArray } from 'basic-data-handling/isArray_notArray';
import { append } from '@writetome51/array-append-prepend/append-prepend';


export class OpenArrayFilter extends OpenArrayContainer {

	constructor(data = []) {
		super(data);
	}


	// testFunction = function(currentValue, currentIndex, theArray){...}
	// testFunction must return boolean.
	byTest(testFunction): this {
		let filteredResults = getFilteredResults(testFunction, this.data);
		// It's import we replace all the contents of this.data this way, so its reference isn't broken:
		this.data.length = 0;
		return this.returnThis_after(append(filteredResults, this.data));
	}


	byType(type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'): this {
		// @ts-ignore
		type = type.toLowerCase();
		if (type === 'array') return this.byTest((item) => isArray(item));

		else return this.byTest((item) => typeof item === type);
	}


}
