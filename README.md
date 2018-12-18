# PublicArrayFilter

An array-manipulating Typescript/Javascript class with methods that   
narrow down the content of the array it contains.

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/public-array-filter
```

## Loading
    
    // if using Typescript:
    import { PublicArrayFilter } from '@writetome51/public-array-filter';
    // if using ES5 Javascript:
    var PublicArrayFilter = 
            require('@writetome51/public-array-filter').PublicArrayFilter;

To instantiate, pass the actual array it will contain to its constructor:

    let filter = new PublicArrayFilter( [item1, item2, item3,...] );

You can reset the array by accessing the class `.data` property:

    filter.data = [1,2,3,4,...];    
    
## Properties
```
data : any[] (read-writable) // the actual array

className: string (read-only)
```

## Methods
```
byTest(testFunction): this
    // Narrows down this.data to only the values that pass test.
    // testFunction = function(currentValue, currentIndex?, theArray?){...}
    // testFunction must return boolean.

byType(
    type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'
): this
    // Narrows down this.data to only values that are the specified type.


protected   _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	   ) : void
    /*********************
    Use this method when you have a bunch of properties that need getter and/or 
    setter functions that all do the same thing. You pass in an array of string 
    names of those properties, and the method attaches the same getter and/or 
    setter function to each property.
    IGetterSetterConfiguration is this object:
    {
        get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function,
	    // get_setterFunction takes the property name as first argument and 
	    // returns the setter function.  The setter function must take one 
	    // parameter and return void.
	    
        get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function
	    // get_getterFunction takes the property name as first argument and 
	    // returns the getter function.  The getter function must return something.
    }
    *********************/ 
	   
	   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?: Function // takes the result returned by method as an argument.
) : this
```

## Inheritance Chain

PublicArrayFilter<--[PublicArrayContainer](https://github.com/writetome51/public-array-container#publicarraycontainer)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)

## License
[MIT](https://choosealicense.com/licenses/mit/)