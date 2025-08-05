"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function IndecisionApp() {
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    options = _React$useState2[0],
    setOptions = _React$useState2[1];
  var handleDeleteOptions = function handleDeleteOptions() {
    setOptions([]);
  };
  var handlePick = function handlePick() {
    var randomNum = Math.floor(Math.random() * options.length);
    var option = options[randomNum];
    alert(option);
  };
  var handleAddOption = function handleAddOption(option) {
    if (!option) {
      //if there is a empty string
      return 'Enter valid value to add item';
    } else if (options.indexOf(option) > -1) {
      // if option exist
      return 'This option already exists';
    }
    setOptions(function (prevOptions) {
      return [].concat(_toConsumableArray(prevOptions), [option]);
    });
  };
  var title = 'Indecision';
  var subtitle = 'Put your life in the hands of a computer';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    title: title,
    subtitle: subtitle
  }), /*#__PURE__*/React.createElement(Action, {
    hasOptions: options.length > 0,
    handlePick: handlePick
  }), /*#__PURE__*/React.createElement(Options, {
    options: options,
    handleDeleteOptions: handleDeleteOptions
  }), /*#__PURE__*/React.createElement(AddOption, {
    handleAddOption: handleAddOption
  }));
}
function Header(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle;
  console.log({
    title: title,
    subtitle: subtitle
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("h2", null, subtitle));
}
function Action(_ref2) {
  var handlePick = _ref2.handlePick,
    hasOptions = _ref2.hasOptions;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: handlePick,
    disabled: !hasOptions
  }, "What should I do?"));
}
function Options(_ref3) {
  var options = _ref3.options,
    handleDeleteOptions = _ref3.handleDeleteOptions;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleDeleteOptions
  }, "Remove all"), options.map(function (option) {
    return /*#__PURE__*/React.createElement(Option, {
      key: option,
      optionText: option
    });
  }));
}
function Option(_ref4) {
  var optionText = _ref4.optionText;
  return /*#__PURE__*/React.createElement("div", null, optionText);
}
function AddOption(_ref5) {
  var handleAddOption = _ref5.handleAddOption;
  var _React$useState3 = React.useState(undefined),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    error = _React$useState4[0],
    setError = _React$useState4[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value.trim();
    var errorMessage = handleAddOption(option);
    setError(errorMessage);

    // Clear the input if no error
    if (!errorMessage) {
      e.target.elements.option.value = '';
    }
  };
  return /*#__PURE__*/React.createElement("div", null, error && /*#__PURE__*/React.createElement("p", null, error), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
}
var root = ReactDOM.createRoot(document.getElementById('app'));
root.render(/*#__PURE__*/React.createElement(IndecisionApp, null));
