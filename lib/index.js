'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hello;
function hello(someone) {
    return `Hello ${someone || 'World'}!`;
}