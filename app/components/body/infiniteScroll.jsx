var React = require('React');
var InfiniteScroll = React.createClass({
  componentWillMount: function () {
    this.props.fetchDataCallback();
    window.removeEventListener('scroll', this.handleScroll);
  },

  loadData: function(){
    this.props.fetchDataCallback();
  },
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function (e) {
    if (window.scrollY + window.innerHeight > this.getDOMNode().scrollHeight - 100) {
      this.loadData();
    }
  },
  getDisplay: function(){
    return (
      <div>{this.props.delegate}</div>
    )
  },
  render: function () {
    return (
      <div>{this.getDisplay()}</div>
    )
  }
});

module.exports = InfiniteScroll;
//var InfiniteScroll = React.createClass({
//    componentWillMount: function () {
//        window.removeEventListener('scroll', this.handleScroll);
//        this.props.fetchDataCallback();
//    },
//    componentDidMount() {
//        window.addEventListener('scroll', this.handleScroll);
//    },
//    handleScroll: function (e) {
//        if (window.scrollY + window.innerHeight > this.props.list.getDOMNode().scrollHeight - 50) {
//            this.props.fetchDataCallback();
//        }
//    },
//    render: function () {
//        return (
//            <div>There is no data</div>
//        )
//    }
//
//});
//
//module.export = InfiniteScroll;