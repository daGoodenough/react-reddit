import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      user: "",
      text: "",
    };
  }

  handleClick() {
    const post = {
      user: this.state.user,
      text: this.state.text,
      upvotes: 0
    }

    this.props.addPost(post);
  }

  render() {
    return (
      <form>
        <h3>Add a New Post</h3>

        <div className="form-group">
          <input
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            type="text"
            id="post"
            className="form-control"
            placeholder="Post Text"
          />

          <br />

          <input
            value={this.state.user}
            onChange={(e) => this.setState({ user: e.target.value })}
            type="text"
            id="post-user"
            className="form-control"
            placeholder="Your Name"
          />
        </div>

        <button
          onClick={this.handleClick}
          type="button"
          className="btn btn-primary add-post"
        >
          Post
        </button>
      </form>
    );
  }
}

export default PostForm;
