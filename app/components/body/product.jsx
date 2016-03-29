var React = require('React');
var Product = React.createClass({
    storeItemStyle: function () {
        return {
            fontSize: '12px',
            height: '120px'
        }
    },
    outerStyle: function () {
        return {
            padding: '5px !important'
        }
    },
    render: function () {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3" data-toggle="animation-appear" style={this.outerStyle()}>
                <div className="store-item" data-action="openProductModalDetails">
                    <div className="store-item-image">
                        <a href="#">
                            <img src={this.props.ProductInfo.icon_path} alt="" height="480" className="img-responsive"/>
                        </a>
                    </div>
                    <div className="store-item-info clearfix" style={this.storeItemStyle()}>
                        <div>
                            <a href="#">
                                <p className="product-name">
                                    <strong>{this.props.ProductInfo.name}
                                    </strong>
                                </p>
                            </a>
                        </div>
                        <div className="clearfix">
                            <span className="container-of-amount"><a href="#"
                                                                     className="text-muted">{this.props.ProductInfo.amount} {this.props.ProductInfo.unit}</a></span>
                            <span className="container-of-amount"><a href="#"
                                                                     className="text-muted">{this.props.ProductInfo.shops_label}</a></span>
                            <span className="store-item-price themed-color-dark">{this.props.ProductInfo.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Product;