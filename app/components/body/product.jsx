var React = require('React');
var Product = React.createClass({
  render: function () {
    return (
        <div>{this.props.productInfo}</div>
    )
  }
});

module.exports = Product;