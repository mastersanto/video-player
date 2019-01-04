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
        // @ts-ignore
        clips: function () {
            return CLIPS;
        }
        // clips: () => CLIPS
        /*
        // @ts-ignore
        clips(obj: any, { clips }) {
          return clips;
        }
        */
        /*
        // @ts-ignore
        clips(obj: any, { clips }) {
          return clips && clips.length ? clips : 'uhhhhh';
        }
        */
    }
});


/***/ })

};
//# sourceMappingURL=index.813db6948ac4822d2e5e.js.map