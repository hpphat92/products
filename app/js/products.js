var React = require('React');
var Product = require('./Product');
var Products = React.createClass({displayName: "Products",
    render: function () {
        if(this.props.listProduct.length){
            return (
                React.createElement("ul", null, 
                    this.props.listProduct.map(function(listValue){
                        return React.createElement("li", {key: listValue.id}, listValue.name);
                    })
                )
            )
        }
        else{
            return (
                React.createElement("div", {className: "help-block"}, "There is no data")
            )
        }
    }
});

module.exports = Products;