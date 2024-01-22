"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var User = function () {
    var username = (0, react_router_dom_1.useParams)().username;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleNavigate = function () {
        navigate('/about');
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null,
            "User: ",
            username),
        react_1.default.createElement("button", { onClick: handleNavigate }, "Navigate to About")));
};
exports.default = User;
