var React = require('React');
var ReactDOM = require('react-dom');
var Body = require('./body/body');
var App = React.createClass({
    render: function () {
        return (
            <span>
                <Header/>
                <Body/>
            </span>
        )
    }
});

ReactDOM.render(<App/>, document.getElementById('root'));


