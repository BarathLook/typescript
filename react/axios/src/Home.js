"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./styles.css");
var Home = function () {
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("h2", null, "Home"),
        react_1.default.createElement("p", null, "Welcome to the Home page!")));
};
exports.default = Home;
