# PublicArrayFilter

An array-manipulating Typescript/Javascript class with methods that   
narrow down the content of the array it contains.

## Constructor
```ts
constructor(data? = [])  //  'data' is assigned to this.data .
```

You can reset the array by accessing the class `.data` property:
```ts
this.data = [1,2,3,4];
```
    
## Properties
```ts
data : any[]   // the actual array

className: string (read-only)
```

## Methods
<details>
<summary>view methods</summary>

```ts
byTest(testFunction): this
    // Narrows down this.data to only the values that pass `testFunction`.
    // testFunction = function(currentValue, currentIndex?, theArray?): boolean

byType(
    type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined' | 'null'
): this
    // Narrows down this.data to only values that are the specified type.
    // Here, 'null' is considered its own type, separate from 'object'.
    // You can also pass 'array' as a type.  Passing 'object' will match with objects and arrays.
``` 
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```ts 
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

protected   _errorIfPropertyHasNoValue(
                property: string, // can contain dot-notation, i.e., 'property.subproperty'
                propertyNameInError? = ''
            ) : void
    // If value of this[property] is undefined or null, it triggers fatal error:
    // `The property "${propertyNameInError}" has no value.`
```
</details>


## Inheritance Chain

PublicArrayFilter<--[PublicArrayContainer](https://github.com/writetome51/public-array-container#publicarraycontainer)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)

## Installation

```bash
npm i @writetome51/public-array-filter
```

## Loading
```ts
// if using Typescript:
import { PublicArrayFilter } from '@writetome51/public-array-filter';
// if using ES5 Javascript:
var PublicArrayFilter = require('@writetome51/public-array-filter').PublicArrayFilter;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
