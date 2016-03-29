var React = require('react');
var Input = require('react-bootstrap').Input;
var SearchForm = React.createClass({displayName: "SearchForm",
    getInitialState() {
        return {
            value: ''
        };
    },
    handleChange() {
        // This could also be done using ReactLink:
        // http://facebook.github.io/react/docs/two-way-binding-helpers.html
        this.setState({
            value: this.refs.input.value
        });
    },
    search: function () {
        this.setState({
            value: this.refs.input.value,
        });
        this.props.onChange(this.state.value);
    },
    render() {
        return (
            React.createElement("section", {className: "site-section site-section-light site-section-top"}, 
                React.createElement("div", {className: "container text-center"}, 
                    React.createElement("div", {className: "desktop-only search-desktop-section"}, 
                        React.createElement("div", {className: "pull-left search-group-section"}, 
                            React.createElement("div", {className: "input-group input-group-lg search-group"}, 
                                React.createElement("span", {className: "hiddenSearch"}), 
                                React.createElement("input", {className: "form-control", 
                                       type: "text", 
                                       ref: "input", 
                                       placeholder: "Enter text for search", 
                                       onChange: this.handleChange}
                                    )
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = SearchForm;