var React = require('React');
var Product = React.createClass({displayName: "Product",
  render: function () {
    return (
        React.createElement("div", null, this.props.productInfo)
    )
  }
});

module.exports = Product;