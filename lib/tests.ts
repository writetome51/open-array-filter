import { OpenArrayFilter } from './OpenArrayFilter';
import { arraysMatch } from '@writetome51/arrays-match/arraysMatch';


let filter = new OpenArrayFilter(
	[1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], (input) => 1 === 1]
);

let otherArray = filter.data;

// Test 0
if (arraysMatch(otherArray, filter.data)) console.log('test 0 passed');
else console.log('test 0 failed');


// Test 1
filter.byTest((item) => {
	return (typeof item === 'number' && item > 2);
});
if (arraysMatch(filter.data, [3, 4])) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 1B
if (arraysMatch(otherArray, filter.data)) console.log('test 1B passed');
else console.log('test 1B failed');


// Test 2
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], (input) => 1 === 1];
filter.byTest((item) => {
	return (typeof item === 'string' && item !== 'j');
});
if (arraysMatch(filter.data, ['h', 'i'])) console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], (input) => 1 === 1];
filter.byTest((item) => {
	return (typeof item === 'number' || typeof item === 'string');
});
if (arraysMatch(filter.data, [1, 2, 3, 4, 'h', 'i', 'j'])) console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], (input) => 'hello'];
filter.byType('function');
if (filter.data.length === 1 && typeof filter.data[0] === 'function' && filter.data[0]() === 'hello') {
	console.log('test 4 passed');
}
else console.log('test 4 failed');


// Test 5
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], (input) => 1 === 1];
filter.byType('object');
if (filter.data.length === 2 && typeof filter.data[0] === 'object' && typeof filter.data[1] === 'object') {
	console.log('test 5 passed');
}
else console.log('test 5 failed');


// Test 6
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], (input) => 1 === 1];
filter.byType('array');
if (arraysMatch(filter.data, [[]])) console.log('test 6 passed');
else console.log('test 6 failed');
