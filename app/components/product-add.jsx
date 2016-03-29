var React = require('React');
var ProductAdd = React.createClass({
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
            <div>
                <input type="text" ref="productName" className="form-control"/>
                <button className="btn btn-primary btn-sm glyphicon glyphicon-floppy-disk"
                        onClick={this.addNewProduct}
                    > Save
                </button>
            </div>
        )
    },
    renderButton: function () {
        return (
            <div>
                <button className="btn btn-primary btn-sm glyphicon glyphicon-plus"
                        onClick={this.showAdd}
                    > Add New
                </button>
            </div>
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