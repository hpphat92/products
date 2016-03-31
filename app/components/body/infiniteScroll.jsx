var React = require('React');
var InfiniteScroll = React.createClass({
    componentWillMount: function () {
        window.removeEventListener('scroll', this.handleScroll);
        this.props.fetchDataCallback();
    },
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    handleScroll: function (e) {
        if (window.scrollY + window.innerHeight > this.props.list.getDOMNode().scrollHeight - 50) {
            this.props.fetchDataCallback();
        }
    },
    render: function () {
        return (
            <div>There is no data</div>
        )
    }

});

module.export = InfiniteScroll;