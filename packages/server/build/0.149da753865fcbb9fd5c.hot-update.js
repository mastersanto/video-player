require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/resolvers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CLIPS = [
    {
        end: 30,
        id: '0',
        name: 'Clip One',
        start: 10
    },
    {
        end: 45,
        id: '1',
        name: 'Clip Two',
        start: 31
    }
];
/* harmony default export */ __webpack_exports__["a"] = ({
    Query: {
        hello: function (obj, _a) {
            var subject = _a.subject;
            return "Hello, " + subject + "! from Server";
        },
        clips: function () { return CLIPS; }
    }
});


/***/ }),

/***/ "./src/schema.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools__ = __webpack_require__("graphql-tools");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolvers__ = __webpack_require__("./src/resolvers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_graphql__ = __webpack_require__("./src/schema.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schema_graphql__);



var executableSchema = Object(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__["makeExecutableSchema"])({
    typeDefs: __WEBPACK_IMPORTED_MODULE_2__schema_graphql__,
    // tslint:disable-next-line
    resolvers: __WEBPACK_IMPORTED_MODULE_1__resolvers__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = (executableSchema);


/***/ })

};
//# sourceMappingURL=index.bce6ed0fbc85f0c06238.js.map