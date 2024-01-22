"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Home_1 = __importDefault(require("./Home"));
var About_1 = __importDefault(require("./About"));
var ApiRequest_1 = __importDefault(require("./ApiRequest"));
var Contact_1 = __importDefault(require("./Contact"));
var NoMatch_1 = __importDefault(require("./NoMatch"));
var NavLink_1 = __importDefault(require("./NavLink"));
var User_1 = __importDefault(require("./User"));
var CrudOperations_1 = __importDefault(require("./CrudOperations"));
require("./styles.css");
var LazyLoadedComponent = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(require('./LazyLoadedComponent')); }); });
var App = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("nav", null,
                react_1.default.createElement("ul", null,
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(NavLink_1.default, { to: "/", label: "Home" })),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(NavLink_1.default, { to: "/about", label: "About" })),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(NavLink_1.default, { to: "/api", label: "Api Request" })),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(NavLink_1.default, { to: "/contact", label: "Contact" })),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(NavLink_1.default, { to: "/user/john", label: "User (John)" })),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(NavLink_1.default, { to: "/lazy", label: "Lazy Loaded" })),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(NavLink_1.default, { to: "/crud", label: "CRUD Operations" })))),
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/about", element: react_1.default.createElement(About_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/api", element: react_1.default.createElement(ApiRequest_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/contact", element: react_1.default.createElement(Contact_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/user/:username", element: react_1.default.createElement(User_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/lazy", element: react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("div", null, "Loading...") },
                        react_1.default.createElement(LazyLoadedComponent, null)) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/crud", element: react_1.default.createElement(CrudOperations_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NoMatch_1.default, null) })))));
};
exports.default = App;
