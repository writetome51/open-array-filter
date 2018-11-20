To include in your project:

    import { PublicArrayFilter } from '@writetome51/public-array-filter';

PublicArrayFilter has methods that narrow down the content of the array it contains  
and return the class instance.

To instantiate, pass the actual array it will contain into its constructor:

    let filter = new PublicArrayFilter( [item1, item2, item3,...] );

You can also reset the array by accessing the class 'data' property:

    filter.data = [1,2,3,4,...];

These are all its methods:

        // Narrows down the array to only the values that pass test:

        byTest(testFunction): this
        // testFunction = function(currentValue, currentIndex?, theArray?){...}
        // testFunction must return boolean.


        // Narrows down the array to only values that are the specified type:

        byType(
    	    type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'
        ): this


