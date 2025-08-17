"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _IndecisionApp = _interopRequireDefault(require("./components/IndecisionApp.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var root = _client["default"].createRoot(document.getElementById('app'));
root.render(/*#__PURE__*/_react["default"].createElement(_IndecisionApp["default"], null));
