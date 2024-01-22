"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var NoMatch = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "404 - Not Found"),
        react_1.default.createElement("p", null, "The requested page does not exist.")));
};
exports.default = NoMatch;
