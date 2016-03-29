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
            <section className="site-section site-section-light site-section-top">
                <div className="container text-center">
                    <div className="desktop-only search-desktop-section">
                        <div className="pull-left search-group-section">
                            <div className="input-group input-group-lg search-group">
                                <span className="hiddenSearch"></span>
                                <input className="form-control"
                                       type="text"
                                       ref="input"
                                       placeholder="Enter text for search"
                                       onChange={this.handleChange}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = SearchForm;