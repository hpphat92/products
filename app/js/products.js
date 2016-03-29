var React = require('react');
var Product = require('./product');
var Products = React.createClass({displayName: "Products",

  render: function () {
    return (
      React.createElement(Product, null
      )
    )
  }
});

React.render(React.createElement(Products, null), document.body);


