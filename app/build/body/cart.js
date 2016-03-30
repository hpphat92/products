var React = require('react');
var Cart = React.createClass({displayName: "Cart",
    getInitialState: function () {
        return {
            displayBlock: {
                display: 'block'
            },
            paddingTop14: {
                paddingTop: '14px'
            }
        }
    },
    render() {
        return (
            React.createElement("div", {id: "cartQuickView"}, 
                React.createElement("div", {className: "col-md-12 cart-total"}, 
                    React.createElement("div", {className: "col-md-7"}, 
                        React.createElement("h3", null, "0 VND"), 
                        React.createElement("span", {style: this.state.displayBlock}, "0 ITEM(S)"), 
                        React.createElement("span", {style: this.state.displayBlock}, "Service"), 
                        React.createElement("span", {style: this.state.displayBlock}, "0 VND")
                    ), 
                    React.createElement("div", {className: "col-md-5"}, 

                                    React.createElement("span", {className: "mini-cart-button"}, 
          React.createElement("a", {href: "#", "data-action": "empty-cart", className: "btn btn-sm btn-block btn-default"}, "EMPTY")
        ), 
                                    React.createElement("span", {className: "mini-cart-button"}, 
          React.createElement("a", {href: "/shoppingCart", className: "btn btn-sm btn-block btn-default"}, "VIEW")
        ), 
                                    React.createElement("span", {className: "mini-cart-button"}, 
          React.createElement("a", {href: "/checkout", className: "btn btn-sm btn-block btn-success"}, "CHECKOUT")
        )

                    )
                )
            )
        );
    }
});

module.exports = Cart;