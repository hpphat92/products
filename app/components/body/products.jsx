var React = require('React');
var Product = require('./Product');


var Products = React.createClass({
    render: function () {
        if (this.props.listProduct.length) {
            return (
                <div className="row store-items" id="products_section">
                    <div className="customGrid">
                        {this.props.listProduct.map(function (v,id) {
                            return <Product key={id} ProductInfo={v}/>;
                        })}
                    </div>

                </div>
            )
        }
        else {
            return (
                <div className="help-block">There is no data</div>
            )
        }
    }
});

module.exports = Products;