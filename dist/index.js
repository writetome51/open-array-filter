"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var public_array_container_1 = require("@writetome51/public-array-container");
var array_get_filtered_results_1 = require("@writetome51/array-get-filtered-results");
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var errorIfNotString_1 = require("basic-data-handling/errorIfNotString");
var set_array_1 = require("@writetome51/set-array");
// @ts-ignore
var arrayPluck = require('array-pluck');
var PublicArrayFilter = /** @class */ (function (_super) {
    __extends(PublicArrayFilter, _super);
    function PublicArrayFilter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These methods all narrow down the content of the array and return the class instance.
    PublicArrayFilter.prototype.byTest = function (testFunction) {
        // each object in filteredResults matches this interface: {value: any, index: integer}
        var filteredResults = array_get_filtered_results_1.getFilteredResults(testFunction, this.data);
        var values = arrayPluck(filteredResults, 'value');
        return this._returnThis_after(set_array_1.setArray(this.data, values));
    };
    PublicArrayFilter.prototype.byType = function (type) {
        errorIfNotString_1.errorIfNotString(type);
        // @ts-ignore
        type = type.toLowerCase();
        if (type === 'array')
            return this.byTest(function (item) { return isArray_notArray_1.isArray(item); });
        else
            return this.byTest(function (item) { return typeof item === type; });
    };
    return PublicArrayFilter;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArrayFilter = PublicArrayFilter;
