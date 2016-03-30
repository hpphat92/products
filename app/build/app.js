var React = require('React');
var ReactDOM = require('react-dom');
var Body = require('./body/body');
var Header = require('./header/header');
var App = React.createClass({displayName: "App",
    render: function () {
        return (
            React.createElement("span", null, 
                React.createElement(Header, null), 
                React.createElement(Body, null)
            )
        )
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));


