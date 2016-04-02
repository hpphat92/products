var React = require('react');
var InfiniteScroll = React.createClass({
    getInitialState: function () {
        return {
            displayBlock: {
                display: 'block'
            },
            paddingTop14: {
                paddingTop: '14px'
            }
        }
    },
    render() {
        return (
            <div id="cartQuickView">
                <div className="col-md-12 cart-total">
                    <div className="col-md-7">
                        <h3>0 VND</h3>
                        <span style={this.state.displayBlock}>0 ITEM(S)</span>
                        <span style={this.state.displayBlock}>Service</span>
                        <span style={this.state.displayBlock}>0 VND</span>
                    </div>
                    <div className="col-md-5">

                                    <span className="mini-cart-button">
          <a href="#" data-action="empty-cart" className="btn btn-sm btn-block btn-default">EMPTY</a>
        </span>
                                    <span className="mini-cart-button">
          <a href="/shoppingCart" className="btn btn-sm btn-block btn-default">VIEW</a>
        </span>
                                    <span className="mini-cart-button">
          <a href="/checkout" className="btn btn-sm btn-block btn-success">CHECKOUT</a>
        </span>

                    </div>
                </div>
            </div>
        );
    }
});

module.exports = InfiniteScroll;