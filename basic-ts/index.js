"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/2";
//process is async so will return a promise
axios_1.default.get(url).then(function (res) {
    console.log("\n    The Id is ".concat(res.data.id, "\n    The title is ").concat(res.data.title, "\n    Iscompleted ").concat(res.data.completed, "\n   "));
});
