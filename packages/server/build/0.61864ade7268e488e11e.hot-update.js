require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/schema.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Clip"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"start"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"end"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Video"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"videoUrl"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"clips"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Clip"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"hello"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"subject"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"clip"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Clip"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"clips"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Clip"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"video"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"deleteClip"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"saveClip"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"start"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"end"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Clip"}},"directives":[]}]}],"loc":{"start":0,"end":348}};
    doc.loc.source = {"body":"type Clip {\n  id: ID!\n  name: String\n  start: Int\n  end: Int\n}\n\ntype Video {\n  id: Int!\n  videoUrl: String\n  clips: [Clip]\n}\n\ntype Query {\n  hello(subject: String): String\n  clip(id: ID!): Clip\n  clips: [Clip]\n  video(id: ID): Video\n}\n\ntype Mutation {\n  deleteClip (id: ID!): Boolean\n  saveClip (id: ID, name: String, start: Int, end: Int): Clip\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


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
                    'query hello($subject:String) {\n  hello(subject: $subject)\n}',
                variables: { subject: 'World' }
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
//# sourceMappingURL=index.f18066d7814f0ff37727.js.map