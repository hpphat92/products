var React = require('React');
var $ = require('jquery');
var ReactDOM = require('react-dom');
var InfiniteScroll = require('./infiniteScroll');
var ProductAdd = require('./product-add');
var ProductList = require('./products');
var SearchForm = require('./search');
var LeftFilter = require('./leftFilter');
var Cart = require('./cart');
var Body = React.createClass({
    originalList: [],
    offset: 0,
    limit: 20,
    startSearching: false,
    getInitialState: function () {
        return {
            productList: [],
            id: 0,
            paddingTop14: {
                paddingTop: '14px'
            },
            searchKey: ''
        }
    },
    searchFilter: function (key) {
        this.offset = 0;
        return $.ajax({
            url: "http://catalogue.marketoi.com/index.php/api/Front/products",
            method: 'GET',
            data: $.param({
                user_id: null,
                search: key,
                limit: this.limit,
                offset: this.offset
            }),
            dataType: 'json',
            cache: false
        });
    },
    loadData: function () {
        var self = this;
        return $.ajax({
            url: "http://catalogue.marketoi.com/index.php/api/Front/products",
            data: $.param({
                user_id: null,
                device_id: '5xJpgutpmDvhCsFMQ',
                limit: this.limit,
                offset: this.offset,
                time_illico: 1458598834653,
                search: self.state.searchKey
            }),
            dataType: 'json',
            cache: false,
            success: function (data) {
                if (data.result && data.status !== "false") {
                    this.originalList.push.apply(this.originalList, data.result);
                    this.offset += this.limit;
                    this.setState({
                        productList: this.originalList
                    });
                }
            }.bind(this),
            error: function (xhr, status, err) {
                this.originalList = [];
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    search: function (filterValue) {
        var self = this;
        self.setState({
            searchKey: filterValue
        });
        this.searchFilter(filterValue).then(function (resp) {
            if (resp.result && resp.status !== "false") {
                self.originalList = resp.result;
                self.offset += self.limit;
                self.setState({
                    productList: self.originalList
                });
            }

        })

    },
    render: function () {
        return (
            <div>
                <SearchForm onChange={this.search}/>
                <section className="site-section site-section-location">
                    <div className="container">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-7">
                            <div className="col-md-5 first-message">

                            </div>
                            <div className="col-md-2 ajax-loading-product">

                            </div>
                            <div className="col-md-5 first-message">

                            </div>
                        </div>
                        <div className="col-md-3 desktop-only" style={this.state.paddingTop14}>
                            <span className="mini-cart-title">CART</span>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <LeftFilter/>
                            </div>
                            <div className="col-md-7">
                                <InfiniteScroll fetchDataCallback={this.loadData}
                                                delegate={<ProductList listProduct={this.state.productList}/>}/>
                            </div>
                            <div className="col-md-3 col-lg-3 cart-quick-view">
                                <Cart/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});


module.exports = Body;