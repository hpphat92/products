var React = require('React');
var ReactDOM = require('react-dom');
var Product = require('./product');
var Products = React.createClass({
  render: function () {
    return (
      < Product>
      </Product>
    )
  }
});

ReactDOM.render(<Products/>, document.getElementById('root'));


