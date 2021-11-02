"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = void 0;

var _lodashEs = require("lodash-es");

const foo = arr => (0, _lodashEs.groupBy)(arr, x => x % 2 === 0 ? "even" : "odd");

exports.foo = foo;