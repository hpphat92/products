var React = require('React');
var Product = React.createClass({displayName: "Product",
    storeItemStyle: function () {
        return {
            fontSize: '12px',
            height: '120px'
        }
    },
    outerStyle: function () {
        return {
            padding: '5px !important'
        }
    },
    render: function () {
        return (
            React.createElement("div", {className: "col-sm-6 col-md-4 col-lg-3", "data-toggle": "animation-appear", style: this.outerStyle()}, 
                React.createElement("div", {className: "store-item", "data-action": "openProductModalDetails"}, 
                    React.createElement("div", {className: "store-item-image"}, 
                        React.createElement("a", {href: "#"}, 
                            React.createElement("img", {src: this.props.ProductInfo.icon_path, alt: "", height: "480", className: "img-responsive"})
                        )
                    ), 
                    React.createElement("div", {className: "store-item-info clearfix", style: this.storeItemStyle()}, 
                        React.createElement("div", null, 
                            React.createElement("a", {href: "#"}, 
                                React.createElement("p", {className: "product-name"}, 
                                    React.createElement("strong", null, this.props.ProductInfo.name
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "clearfix"}, 
                            React.createElement("span", {className: "container-of-amount"}, React.createElement("a", {href: "#", 
                                                                     className: "text-muted"}, this.props.ProductInfo.amount, " ", this.props.ProductInfo.unit)), 
                            React.createElement("span", {className: "container-of-amount"}, React.createElement("a", {href: "#", 
                                                                     className: "text-muted"}, this.props.ProductInfo.shops_label)), 
                            React.createElement("span", {className: "store-item-price themed-color-dark"}, this.props.ProductInfo.price)
                        )
                    )
                )
            )
        )
    }
});

module.exports = Product;