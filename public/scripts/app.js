"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);
    return _callSuper(this, IndecisionApp, arguments);
  }
  _inherits(IndecisionApp, _React$Component);
  return _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Put your life in the hands of a computer';
      var options = ['Thing one', 'Thing two', 'Thing four'];
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: title,
        subtitle: subtitle
      }), /*#__PURE__*/React.createElement(Action, null), /*#__PURE__*/React.createElement(Options, {
        options: options
      }), /*#__PURE__*/React.createElement(AddOption, null));
    }
  }]);
}(React.Component);
var Header = /*#__PURE__*/function (_React$Component2) {
  function Header() {
    _classCallCheck(this, Header);
    return _callSuper(this, Header, arguments);
  }
  _inherits(Header, _React$Component2);
  return _createClass(Header, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("h2", null, this.props.subtitle));
    }
  }]);
}(React.Component);
var Action = /*#__PURE__*/function (_React$Component3) {
  function Action() {
    _classCallCheck(this, Action);
    return _callSuper(this, Action, arguments);
  }
  _inherits(Action, _React$Component3);
  return _createClass(Action, [{
    key: "handlePick",
    value: function handlePick() {
      alert('handlePick');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.handlePick
      }, "What should I do?"));
    }
  }]);
}(React.Component);
var Options = /*#__PURE__*/function (_React$Component4) {
  function Options(props) {
    var _this;
    _classCallCheck(this, Options);
    _this = _callSuper(this, Options, [props]);
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    return _this;
  }
  _inherits(Options, _React$Component4);
  return _createClass(Options, [{
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      console.log(this.props.options);
      alert('Remove handlepick');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.handleRemoveAll
      }, "Remove all"), this.props.options.map(function (option) {
        return /*#__PURE__*/React.createElement(Option, {
          key: option,
          optionText: option
        });
      }));
    }
  }]);
}(React.Component);
var Option = /*#__PURE__*/function (_React$Component5) {
  function Option() {
    _classCallCheck(this, Option);
    return _callSuper(this, Option, arguments);
  }
  _inherits(Option, _React$Component5);
  return _createClass(Option, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.props.optionText);
    }
  }]);
}(React.Component);
var AddOption = /*#__PURE__*/function (_React$Component6) {
  function AddOption() {
    _classCallCheck(this, AddOption);
    return _callSuper(this, AddOption, arguments);
  }
  _inherits(AddOption, _React$Component6);
  return _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      if (option) {
        alert(option);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleAddOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);
}(React.Component);
var root = ReactDOM.createRoot(document.getElementById('app'));
root.render(/*#__PURE__*/React.createElement(IndecisionApp, null));
