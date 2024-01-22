"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./styles.css");
var About = function () {
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("h2", null, "About"),
        react_1.default.createElement("p", null, "This is the About page.")));
};
exports.default = About;
