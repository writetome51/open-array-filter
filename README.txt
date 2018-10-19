The OpenArrayFilter class is a dependency of the OpenArray class
( package:  @writetome51/open-array ).

To instantiate, pass the actual array it will contain into its constructor:

let getter = new OpenArrayItemGetter( [item1, item2, item3,...] );

You can also reset the array by accessing the classes 'data' property:

getter.data = [1,2,3,4,...];


OpenArrayFilter has methods that narrow down the content of the array it contains.


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
