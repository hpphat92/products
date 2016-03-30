var React = require('React');
var $ = require('jquery');
var ReactDOM = require('react-dom');
var ProductAdd = require('./product-add');
var ProductList = require('./products');
var SearchForm = require('./search');
var LeftFilter = require('./leftFilter');
var Cart = require('./cart');
var Body = React.createClass({
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
        $.ajax({
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
    componentWillMount: function () {
        window.removeEventListener('scroll', this.handleScroll);
        this.loadData();
    },
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    handleScroll: function (e) {
        if (window.scrollY + window.innerHeight > this.getDOMNode().scrollHeight - 50) {
            this.loadData();
        }
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
                                <ProductList listProduct={this.state.productList}/>
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