"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arrays_match_1 = require("@writetome51/arrays-match");
var filter = new index_1.PublicArrayFilter([1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], function (input) { return 1 === 1; }]);
var otherArray = filter.data;
// Test 0
if (arrays_match_1.arraysMatch(otherArray, filter.data))
    console.log('test 0 passed');
else
    console.log('test 0 FAILED');
// Test 1
filter.byTest(function (item) {
    return (typeof item === 'number' && item > 2);
});
if (arrays_match_1.arraysMatch(filter.data, [3, 4]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 1B
if (arrays_match_1.arraysMatch(otherArray, filter.data))
    console.log('test 1B passed');
else
    console.log('test 1B FAILED');
// Test 2
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], function (input) { return 1 === 1; }];
filter.byTest(function (item, index) {
    return (typeof item === 'string' && index > 4);
});
if (arrays_match_1.arraysMatch(filter.data, ['i', 'j']))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], function (input) { return 1 === 1; }];
filter.byTest(function (item, index, arr) {
    return ((typeof item === 'number' || typeof item === 'string') && (typeof arr[index + 2] === 'string'));
});
if (arrays_match_1.arraysMatch(filter.data, [3, 4, 'h']))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], function (input) { return 'hello'; }];
filter.byType('function');
if (filter.data.length === 1 && typeof filter.data[0] === 'function' && filter.data[0]() === 'hello') {
    console.log('test 4 passed');
}
else
    console.log('test 4 FAILED');
// Test 5
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], function (input) { return 1 === 1; }];
filter.byType('object');
if (filter.data.length === 2 && typeof filter.data[0] === 'object' && typeof filter.data[1] === 'object') {
    console.log('test 5 passed');
}
else
    console.log('test 5 FAILED');
// Test 6
filter.data = [1, 2, 3, 4, 'h', 'i', 'j', true, false, {}, [], function (input) { return 1 === 1; }];
filter.byType('array');
if (arrays_match_1.arraysMatch(filter.data, [[]]))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
//Test 7
var errorTriggered = false;
filter.data = [1, 2, 3, 4, 5];
try {
    filter.byTest((1));
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
//Test 8
errorTriggered = false;
filter.data = [1, 2, 3, 4, 5, 6, 7];
try {
    filter.byType([]);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
//Test 9: make sure byTest() returns the instance:
var returned = filter.byTest(function (item) {
    return (typeof item === 'number');
});
if (returned.className && returned.className === 'PublicArrayFilter')
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
//Test 10: make sure byType() returns the instance:
returned = filter.byType('number');
if (returned.className && returned.className === 'PublicArrayFilter')
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
