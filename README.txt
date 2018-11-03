To include in your project:

import { PublicArrayFilter } from '@writetome51/public-array-filter';

The PublicArrayFilter class is a dependency of the PublicArray class
( package:  @writetome51/public-array ).

To instantiate, pass the actual array it will contain into its constructor:

let filter = new PublicArrayFilter( [item1, item2, item3,...] );

You can also reset the array by accessing the class 'data' property:

filter.data = [1,2,3,4,...];


PublicArrayFilter has methods that narrow down the content of the array it contains.  These are all
of them:

        // Narrows down the array to only the values that pass test:

    	byTest(testFunction) // returns class instance
        // testFunction = function(currentValue, currentIndex?, theArray?){...}
        // testFunction must return boolean.


        // Narrows down the array to only values that are the specified type:

    	byType(type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined')
        // returns class instance
