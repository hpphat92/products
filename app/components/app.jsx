var React = require('React');
var ReactDOM = require('react-dom');
var ProductAdd = require('./product-add');
var Products = require('./products');
var SearchForm = require('./search');
var Header = require('./header/header');
var App = React.createClass({

    getInitialState: function () {
        return {
            productList: [],
            id: 0
        }
    },
    getDefaultProps: function () {
        return {
            productList: []
        }
    },

    getProductObj: function (productName) {
        var id = ++this.state.id;
        this.setState({
            id: id
        });
        return {
            name: productName,
            id: id
        }
    },
    onAddNewProduct: function (productName) {
        var productList = this.state.productList;
        productList.push(this.getProductObj(productName));
        this.setState({
            productList: productList
        });
        this.setProps({
            productList: productList
        });
    },
    search: function (filterValue) {
        var products = this.state.productList;
        var filteredProducts = products.filter(function (p) {
            return p.name.toLowerCase().startsWith(filterValue.toLowerCase());
        });
        this.setProps({
            productList: filteredProducts
        });
    },
    render: function () {
        return (
            <span>
                <Header/>
                <SearchForm onChange={this.search}></SearchForm>
                <Products listProduct={this.props.productList}/>
            </span>
        )
    }
});

ReactDOM.render(<App/>, document.getElementById('root'));


