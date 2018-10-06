"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function hello(compiler) {
    console.log(greet_1.sayHello(compiler));
}
hello("TypeScript");
