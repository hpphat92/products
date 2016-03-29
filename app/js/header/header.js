var React = require('React');
var Header = React.createClass({displayName: "Header",

    getListButton: function () {
        return [
            {
                name: 'About',
                href: '/about'
            },
            {
                name: 'Support: 0126.449.2309',
                href: '#'
            },
            {
                name: 'Become a shopper',
                href: 'http://apply.marketoi.com'
            },
            {
                name: 'Login',
                className: 'log-in-option',
                href: '/sign-in'
            },
            {
                name: 'Sign Up',
                className: 'log-in-option',
                href: '/sign-up'
            }
        ]
    },

    render: function () {
        return (
            React.createElement("header", null, 
                React.createElement("div", {className: "col-xs-12 col-md-12 header-bar-section"}, 
                    React.createElement("nav", {className: "site-navigation-bar"}, 
                        React.createElement("ul", {className: "site-nav"}, 
                            
                                this.getListButton().map(function (state,idx) {
                                    return (
                                        React.createElement("li", {key: idx}, 
                                            React.createElement("a", {href: state.href, className: state.className}, state.name)
                                        )
                                    )
                                })
                            
                        )
                    )
                )
            )
        )
    }
});

module.exports = Header;