"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var get_array_from_property_1 = require("@writetome51/get-array-from-property");
var array_get_by_test_1 = require("@writetome51/array-get-by-test");
var public_array_container_1 = require("@writetome51/public-array-container");
var set_array_1 = require("@writetome51/set-array");
var public_array_container_by_type_implementation_1 = require("@writetome51/public-array-container-by-type-implementation");
var PublicArrayFilter = /** @class */ (function (_super) {
    __extends(PublicArrayFilter, _super);
    function PublicArrayFilter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These methods all narrow down the content of the array and return the class instance.
    PublicArrayFilter.prototype.byTest = function (testFunction) {
        // each object in filteredResults matches this interface: {value: any, index: integer}
        var filteredResults = array_get_by_test_1.getByTest(testFunction, this.data);
        var values = get_array_from_property_1.getArrayFromProperty('value', filteredResults);
        return this._returnThis_after(set_array_1.setArray(this.data, values));
    };
    PublicArrayFilter.prototype.byType = function (type) {
        return public_array_container_by_type_implementation_1._publicArrayContainer_byType_implementation(type, this);
    };
    return PublicArrayFilter;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArrayFilter = PublicArrayFilter;
