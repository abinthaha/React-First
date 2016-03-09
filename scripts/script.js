var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <Comments/>
            </div>
        );
    }
});
var divStyle = {
    color: 'red',
}
var Comments = React.createClass({
    render: function() {
        return (
            <h2 className="commentAuthor" style={divStyle}>Commmmmmmmmmments</h2>
        );
    }
});
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
