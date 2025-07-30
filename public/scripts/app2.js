"use strict";

//Using updated functional components
function IndecisionApp() {
  var title = 'Indecision functional';
  var subtitle = 'Put your life in the hands of a computer';
  var options = ['Thing one', 'Thing two', 'Thing four'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    title: title,
    subtitle: subtitle
  }), /*#__PURE__*/React.createElement(Action, null), /*#__PURE__*/React.createElement(Options, {
    options: options
  }), /*#__PURE__*/React.createElement(AddOption, null));
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
function Action() {
  var handlepick = function handlepick() {
    alert('handlePick');
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: handlepick
  }, "What should I do?"));
}
function Options(_ref2) {
  var options = _ref2.options;
  var handleRemoveAll = function handleRemoveAll() {
    alert('handle remove all');
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleRemoveAll
  }, "Remove all"), options.map(function (option) {
    return /*#__PURE__*/React.createElement(Option, {
      key: option,
      optionText: option
    });
  }));
}
function Option(_ref3) {
  var optionText = _ref3.optionText;
  return /*#__PURE__*/React.createElement("div", null, "Option: ", optionText);
}
function AddOption() {
  var handleAddOption = function handleAddOption(e) {
    e.preventDefault();
    var option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleAddOption
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add option")));
}
var root = ReactDOM.createRoot(document.getElementById('app'));
root.render(/*#__PURE__*/React.createElement(IndecisionApp, null));
