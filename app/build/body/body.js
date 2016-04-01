var React = require('React');
var $ = require('jquery');
var ReactDOM = require('react-dom');
var InfiniteScroll = require('./infiniteScroll');
var ProductAdd = require('./product-add');
var ProductList = require('./products');
var SearchForm = require('./search');
var LeftFilter = require('./leftFilter');
var Cart = require('./cart');
var Body = React.createClass({displayName: "Body",
    originalList: [],
    offset: 0,
    limit: 20,
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
    loadData: function () {
        return $.ajax({
            url: "http://catalogue.marketoi.com/index.php/api/Front/products",
            data: $.param({
                user_id: null,
                device_id: '5xJpgutpmDvhCsFMQ',
                limit: this.limit,
                offset: this.offset,
                time_illico: 1458598834653
            }),
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.originalList.push.apply(this.originalList, data.result);
                this.search(this.state.searchKey);
                this.offset += this.limit;
            }.bind(this),
            error: function (xhr, status, err) {
                this.originalList = [];
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    search: function (filterValue) {
        var products = this.originalList;
        var filteredProducts = products.filter(function (p) {
            return p.name.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0;
        });
        this.setState({
            productList: filteredProducts,
            searchKey: filterValue
        });
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(SearchForm, {onChange: this.search}), 
                React.createElement("section", {className: "site-section site-section-location"}, 
                    React.createElement("div", {className: "container"}, 
                        React.createElement("div", {className: "col-md-2"}
                        ), 
                        React.createElement("div", {className: "col-md-7"}, 
                            React.createElement("div", {className: "col-md-5 first-message"}

                            ), 
                            React.createElement("div", {className: "col-md-2 ajax-loading-product"}

                            ), 
                            React.createElement("div", {className: "col-md-5 first-message"}

                            )
                        ), 
                        React.createElement("div", {className: "col-md-3 desktop-only", style: this.state.paddingTop14}, 
                            React.createElement("span", {className: "mini-cart-title"}, "CART")
                        ), 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "col-md-2"}, 
                                React.createElement(LeftFilter, null)
                            ), 
                            React.createElement("div", {className: "col-md-7"}, 
                                React.createElement(InfiniteScroll, {list: this.state.productList, fetchDataCallback: this.loadData, delegate: React.createElement(ProductList, {listProduct: this.state.productList})})
                            ), 
                            React.createElement("div", {className: "col-md-3 col-lg-3 cart-quick-view"}, 
                                React.createElement(Cart, null)
                            )
                        )
                    )
                )
            )
        )
    }
});


module.exports = Body;