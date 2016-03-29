var React = require('React');
var ReactDOM = require('react-dom');
var Product = require('./product');
var Products = React.createClass({displayName: "Products",
  render: function () {
    return (
      React.createElement(Product, null
      )
    )
  }
});

ReactDOM.render(React.createElement(Products, null), document.getElementById('root'));


