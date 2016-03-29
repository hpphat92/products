var React = require('react');
var Input = require('react-bootstrap').Input;
var SearchForm = React.createClass({
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
            <div className="row">
                <div className="col-md-10">
                    <input className="form-control"
                           type="text"
                           ref="input"
                           placeholder="Enter text for search"
                           onChange={this.handleChange}
                        />
                </div>

                <div className="col-md-2">
                    <button className="glyphicon glyphicon-search btn btn-primary"
                            onClick={this.search}
                        >
                    </button>
                </div>
            </div>
        );
    }
});

module.exports = SearchForm;