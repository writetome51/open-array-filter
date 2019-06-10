import { getArrayFromProperty } from '@writetome51/get-array-from-property';
import { getByTest } from '@writetome51/array-get-by-test';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { setArray } from '@writetome51/set-array';
import { _publicArrayContainer_byType_implementation }
	from '@writetome51/public-array-container-by-type-implementation';


export class PublicArrayFilter extends PublicArrayContainer {

	
	// These methods all narrow down the content of the array and return the class instance.


	byTest(testFunction: (item, index?, array?) => boolean): this {

		// each object in filteredResults matches this interface: {value: any, index: integer}
		let filteredResults = getByTest(testFunction, this.data);

		let values = getArrayFromProperty('value', filteredResults);
		return this._returnThis_after(setArray(this.data, values));
	}


	byType(
		type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined' | 'null'
	): this {

		return _publicArrayContainer_byType_implementation(type, this);
	}


}
