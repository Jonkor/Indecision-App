"use strict";

// import React from 'react';
// import { createRoot } from 'react-dom/client';

console.log('App.js is running');
var app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderAPP();
  }
};
var onClickRemoveAll = function onClickRemoveAll() {
  app.options = [];
  renderAPP();
};
var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};
var appRoot = document.getElementById('app');
var root = ReactDOM.createRoot(appRoot);
var renderAPP = function renderAPP() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options' : 'No options'), /*#__PURE__*/React.createElement("button", {
    disabled: app.options.length === 0,
    onClick: onMakeDecision
  }, "What should I do?"), /*#__PURE__*/React.createElement("button", {
    onClick: onClickRemoveAll
  }, "Remove all"), /*#__PURE__*/React.createElement("ol", null, app.options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option
    }, option);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
  root.render(template);
};
renderAPP();

// const appRoot = document.getElementById('app');
// const root = createRoot(appRoot);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
