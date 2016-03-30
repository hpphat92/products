var React = require('React');
var Product = require('./Product');


var Products = React.createClass({displayName: "Products",
    render: function () {
        if (this.props.listProduct.length) {
            return (
                React.createElement("div", {className: "row store-items", id: "products_section"}, 
                    React.createElement("div", {className: "customGrid"}, 
                        this.props.listProduct.map(function (v,id) {
                            return React.createElement(Product, {key: id, ProductInfo: v});
                        })
                    )

                )
            )
        }
        else {
            return (
                React.createElement("div", {className: "help-block"}, "There is no data")
            )
        }
    }
});

module.exports = Products;