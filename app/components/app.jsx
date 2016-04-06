var React = require('React');
var ReactDOM = require('react-dom');
var Body = require('./body/body');
var About = require('./body/about');
var Header = require('./header/header');
var RouterMixin = require('react-mini-router').RouterMixin;
var App = React.createClass({
    mixins: [RouterMixin],
    routes: {
        'products/app/#!/': 'home',
        '/': 'home',
        'products/app/#!/about': 'about',
        '/about': 'about'
    },
    home: function () {
        return (
            <span>
                <Header/>
                <Body/>
            </span>
        )
    },
    about: function () {
        return (
            <About/>
        )
    },
    render: function () {
        return this.renderCurrentRoute();
    }
});

ReactDOM.render(<App/>, document.getElementById('root'));


