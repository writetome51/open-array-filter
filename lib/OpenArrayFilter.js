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
var OpenArrayContainer_1 = require("@writetome51/open-array-container/OpenArrayContainer");
var array_get_filtered_results_1 = require("@writetome51/array-get-filtered-results");
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var append_prepend_1 = require("@writetome51/array-append-prepend/append-prepend");
var OpenArrayFilter = /** @class */ (function (_super) {
    __extends(OpenArrayFilter, _super);
    function OpenArrayFilter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // testFunction = function(currentValue, currentIndex, theArray){...}
    // testFunction must return boolean.
    OpenArrayFilter.prototype.byTest = function (testFunction) {
        var filteredResults = array_get_filtered_results_1.getFilteredResults(testFunction, this.data);
        // It's import we replace all the contents of this.data this way, so its reference isn't broken:
        this.data.length = 0;
        return this.returnThis_after(append_prepend_1.append(filteredResults, this.data));
    };
    OpenArrayFilter.prototype.byType = function (type) {
        // @ts-ignore
        type = type.toLowerCase();
        if (type === 'array')
            return this.byTest(function (item) { return isArray_notArray_1.isArray(item); });
        else
            return this.byTest(function (item) { return typeof item === type; });
    };
    return OpenArrayFilter;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArrayFilter = OpenArrayFilter;
