var React = require('react');
var Input = require('react-bootstrap').Input;
var Form = React.createClass({displayName: "Form",
  getInitialState() {
    return {
      value: ''
    };
  },
  validationState() {
    let length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },
  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue()
    });
  },
  render() {
    return (
      React.createElement(Input, {
        type: "text", 
        value: this.state.value, 
        placeholder: "Enter text", 
        label: "Working example with validation", 
        help: "Validation is based on string length.", 
        bsStyle: this.validationState(), 
        hasFeedback: true, 
        ref: "input", 
        groupClassName: "group-class", 
        labelClassName: "label-class", 
        onChange: this.handleChange})
    );
  }
});

module.exports = Form;