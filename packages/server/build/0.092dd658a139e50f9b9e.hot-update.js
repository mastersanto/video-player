require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__("./src/server.ts");

try {
    var PORT_1 = 8080;
    var server_1;
    if (true) {
        module.hot.accept();
        module.hot.dispose(function (data) {
            if (server_1) {
                server_1.close();
            }
            data.reloaded = true;
        });
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__server__["a" /* default */])(PORT_1).then(function (serverInstance) {
        if (!module.hot || !module.hot.data) {
            console.log("GraphQL Server is now running on http://localhost:" + PORT_1);
        }
        server_1 = serverInstance;
    });
}
catch (e) {
    console.error(e);
}


/***/ }),

/***/ "./src/server.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_server_express__ = __webpack_require__("apollo-server-express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_server_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cors__ = __webpack_require__("cors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schema__ = __webpack_require__("./src/schema.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql__ = __webpack_require__("graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_subscriptions_transport_ws__ = __webpack_require__("subscriptions-transport-ws");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_subscriptions_transport_ws___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_subscriptions_transport_ws__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;








/* harmony default export */ __webpack_exports__["a"] = (function (port) { return __awaiter(_this, void 0, void 0, function () {
    var app, server;
    return __generator(this, function (_a) {
        app = __WEBPACK_IMPORTED_MODULE_3_express__();
        server = Object(__WEBPACK_IMPORTED_MODULE_6_http__["createServer"])(app);
        app.use('*', __WEBPACK_IMPORTED_MODULE_2_cors__({ origin: 'http://localhost:3000' }));
        app.use('/graphql', __WEBPACK_IMPORTED_MODULE_1_body_parser__["json"](), Object(__WEBPACK_IMPORTED_MODULE_0_apollo_server_express__["graphqlExpress"])({
            schema: __WEBPACK_IMPORTED_MODULE_4__schema__["a" /* default */]
        }));
        if (true) {
            app.use('/graphiql', Object(__WEBPACK_IMPORTED_MODULE_0_apollo_server_express__["graphiqlExpress"])({
                endpointURL: '/graphql',
                subscriptionsEndpoint: "ws://localhost:" + port + "/subscriptions",
                // tslint:disable-next-line
                query: '# Welcome to your own GraphQL server!\n#\n' +
                    '# Press Play button above to execute GraphQL query\n#\n' +
                    '# You can start editing source code and see results immediately\n\n' +
                    'query hello($subject:String) {\n  hello(subject: $subject)\n}\n\n' +
                    'query Clips {\n  clips{id, name, start, end} \n}\n\n' +
                    'mutation DeleteClip($id:ID!) {\n  deleteClip(id:$id) \n}\n\n' +
                    'mutation SaveClip($id:ID, $name: String, $start: Int, $end: Int) {\n' +
                    '  saveClip(id:$id, name:$name, start:$start, end:$end) {\n' +
                    '    id, name, start, end\n' +
                    '  }\n' +
                    '}\n',
                variables: {
                    subject: 'World'
                }
            }));
        }
        return [2 /*return*/, new Promise(function (resolve) {
                server.listen(port, function () {
                    // tslint:disable-next-line
                    new __WEBPACK_IMPORTED_MODULE_7_subscriptions_transport_ws__["SubscriptionServer"]({
                        execute: __WEBPACK_IMPORTED_MODULE_5_graphql__["execute"],
                        subscribe: __WEBPACK_IMPORTED_MODULE_5_graphql__["subscribe"],
                        // tslint:disable-next-line
                        schema: __WEBPACK_IMPORTED_MODULE_4__schema__["a" /* default */]
                    }, {
                        server: server,
                        // tslint:disable-next-line
                        path: '/subscriptions'
                    });
                    resolve(server);
                });
            })];
    });
}); });


/***/ })

};
//# sourceMappingURL=index.5d58da50abf839f0a63e.js.map