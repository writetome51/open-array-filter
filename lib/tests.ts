import { PublicArrayFilter } from './index';
import { arraysMatch } from '@writetome51/arrays-match';


let filter = new PublicArrayFilter(
	[1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], (input) => 1 === 1]
);

let otherArray = filter.data;

// Test 0
if (arraysMatch(otherArray, filter.data)) console.log('test 0 passed');
else console.log('test 0 FAILED');


// Test 1
filter.byTest((item) => {
	return (typeof item === 'number' && item > 2);
});
if (arraysMatch(filter.data, [3, 4])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 1B
if (arraysMatch(otherArray, filter.data)) console.log('test 1B passed');
else console.log('test 1B FAILED');


// Test 2
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], (input) => 1 === 1];
filter.byTest((item, index) => {
	return (typeof item === 'string' && index > 4);
});
if (arraysMatch(filter.data, ['i', 'j'])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], (input) => 1 === 1];
filter.byTest((item, index, arr) => {
	return ((typeof item === 'number' || typeof item === 'string') && (typeof arr[index + 2] === 'string'));
});
if (arraysMatch(filter.data, [3, 4, 'h'])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], (input) => 'hello'];
filter.byType('function');
if (filter.data.length === 1 && typeof filter.data[0] === 'function' && filter.data[0]() === 'hello') {
	console.log('test 4 passed');
}
else console.log('test 4 FAILED');


// Test 5
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], (input) => 1 === 1];
filter.byType('object');
if (filter.data.length === 2 && typeof filter.data[0] === 'object' && typeof filter.data[1] === 'object') {
	console.log('test 5 passed');
}
else console.log('test 5 FAILED');


// Test 6
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], (input) => 1 === 1];
filter.byType('array');
if (arraysMatch(filter.data, [[]])) console.log('test 6 passed');
else console.log('test 6 FAILED');


//Test 7
let errorTriggered = false;
filter.data = [1, 2, 3, 4, 5];
try {
	filter.byTest((1));
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


//Test 8
errorTriggered = false;
filter.data = [1, 2, 3, 4, 5, 6, 7];
try {
	filter.byType([]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');


//Test 9: make sure byTest() returns the instance:
let returned = filter.byTest((item) => {
	return (typeof item === 'number');
});
if (returned.className && returned.className === 'PublicArrayFilter') console.log('test 9 passed');
else console.log('test 9 FAILED');


//Test 10: make sure byType() returns the instance:
returned = filter.byType('number');
if (returned.className && returned.className === 'PublicArrayFilter') console.log('test 10 passed');
else console.log('test 10 FAILED');