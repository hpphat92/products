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
            React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-md-10"}, 
                    React.createElement("input", {className: "form-control", 
                           type: "text", 
                           ref: "input", 
                           placeholder: "Enter text for search", 
                           onChange: this.handleChange}
                        )
                ), 

                React.createElement("div", {className: "col-md-2"}, 
                    React.createElement("button", {className: "glyphicon glyphicon-search btn btn-primary", 
                            onClick: this.search
                        }
                    )
                )
            )
        );
    }
});

module.exports = SearchForm;