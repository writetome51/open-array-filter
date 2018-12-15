# PublicArrayFilter

PublicArrayFilter is an array-manipulating Typescript/Javascript class with methods that   
narrow down the content of the array it contains.

To include in your project:
    
    // if using Typescript:
    import { PublicArrayFilter } from '@writetome51/public-array-filter';
    // if using ES5 Javascript:
    var PublicArrayFilter = require('@writetome51/public-array-filter').PublicArrayFilter;


To instantiate, pass the actual array it will contain into its constructor:

    let filter = new PublicArrayFilter( [item1, item2, item3,...] );

You can also reset the array by accessing the class `.data` property:

    filter.data = [1,2,3,4,...];
    
    
## Properties

    data : any[] (read-writable) // the actual array

## Methods

    byTest(testFunction): this
        // Narrows down this.data to only the values that pass test.
        // testFunction = function(currentValue, currentIndex?, theArray?){...}
        // testFunction must return boolean.

    byType(
        type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'
    ): this
        // Narrows down this.data to only values that are the specified type.