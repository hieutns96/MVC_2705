
/*We pass some methods in a JavaScript object to React.createClass() to create a new React component. 
The most important of these methods is called render which returns a tree of React components that will eventually render to HTML. */

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Daniel Lo Nigro">Hello ReactJS.NET World!</Comment>
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

// gọi lại 2 cái component đã tạo
var CommentBox = React.createClass({



  render: function() {
    return (
      <div className="commentBox">       
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});


var Comment = React.createClass({
    
 rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
 },

  render: function() {
    var md = new Remarkable();
    return ( 
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
       <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});



/** instantiates the root component, starts the framework, and injects the markup into a raw DOM element, provided as the second argument. */
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);