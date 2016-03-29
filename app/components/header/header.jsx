var React = require('React');
var Header = React.createClass({

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
            <header>
                <div className="col-xs-12 col-md-12 header-bar-section">
                    <nav className="site-navigation-bar">
                        <ul className="site-nav">
                            {
                                this.getListButton().map(function (state,idx) {
                                    return (
                                        <li key={idx}>
                                            <a href={state.href} className={state.className}>{state.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
});

module.exports = Header;