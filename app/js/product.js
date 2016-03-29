var React = require('react');
var Product = React.createClass({displayName: "Product",
  render: function () {
    return (
      React.createElement("div", null, 
        "This is product data"
      )
    )
  }
});

module.exports = Product;