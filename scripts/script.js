var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <Timer />
      </div>
    );
  }
});
var Timer = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        }
    },
    render: function() {
        return (
            <div>Hai : {this.state.count}</div>
        )
    }
})
ReactDOM.render(
    <CommentBox/>,
    document.getElementById('content')
);
