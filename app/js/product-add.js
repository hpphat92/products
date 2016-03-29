var React = require('React');
var ProductAdd = React.createClass({displayName: "ProductAdd",
    getInitialState: function () {
        return {
            isEditting: false,
        }
    },
    addNewProduct: function () {
        this.setState({
            isEditting: false
        });
        this.props.onAdd(this.refs.productName.value);
    },
    showAdd: function () {
        this.setState({
            isEditting: true
        })
    },
    renderForm: function () {
        return (
            React.createElement("div", null, 
                React.createElement("input", {type: "text", ref: "productName", className: "form-control"}), 
                React.createElement("button", {className: "btn btn-primary btn-sm glyphicon glyphicon-floppy-disk", 
                        onClick: this.addNewProduct
                    }, " Save"
                )
            )
        )
    },
    renderButton: function () {
        return (
            React.createElement("div", null, 
                React.createElement("button", {className: "btn btn-primary btn-sm glyphicon glyphicon-plus", 
                        onClick: this.showAdd
                    }, " Add New"
                )
            )
        )
    },
    render: function () {
        if (this.state.isEditting) {
            return this.renderForm();
        } else {
            return this.renderButton();
        }
    }
});

module.exports = ProductAdd;