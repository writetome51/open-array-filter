import { OpenArrayContainer } from '@writetome51/open-array-container/OpenArrayContainer';
import { getFilteredResults } from '@writetome51/array-non-modifying-getters-basic/getFilteredResults';
import { isArray } from 'basic-data-handling/isArray_notArray';
import { append } from '@writetome51/array-append-prepend/append-prepend';


export class OpenArrayFilter extends OpenArrayContainer {

	constructor(data = []) {
		super(data);
	}


	// testFunction must have same signature as callback passed to array.filter(),
	// and must return boolean.
	byTest(testFunction): this {
		let filteredResults = getFilteredResults(testFunction, this.data);
		this.data.length = 0;
		return this.returnThis_after(append(filteredResults, this.data));
	}


	byType(type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'): this {
		// @ts-ignore
		type = type.toLowerCase();
		if (type === 'array') {
			return this.byTest((item) => {
				return (isArray(item));
			});
		}
		else {
			return this.byTest((item) => {
				return (typeof item === type);
			});
		}
	}


}
