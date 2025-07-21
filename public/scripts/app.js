"use strict";

console.log('App.js is running');
var app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Two']
};

// JSX - JavaScript XML

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options' : 'No options'), /*#__PURE__*/React.createElement("o1", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));
var count = 0;
var addOne = function addOne() {
  count += 1;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count -= 1;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};
var appRoot = document.getElementById('app');
var renderCounterApp = function renderCounterApp() {
  var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
    onClick: addOne
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    onClick: minusOne
  }, "-1"), /*#__PURE__*/React.createElement("button", {
    onClick: reset
  }, "Reset"));
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
