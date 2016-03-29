var React = require('React');
var Product = require('./Product');
var Products = React.createClass({
    render: function () {
        if(this.props.listProduct.length){
            return (
                <ul>
                    {this.props.listProduct.map(function(listValue){
                        return <li key={listValue.id}>{listValue.name}</li>;
                    })}
                </ul>
            )
        }
        else{
            return (
                <div className="help-block">There is no data</div>
            )
        }
    }
});

module.exports = Products;