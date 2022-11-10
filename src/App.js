import React from "react";
import PostForm from './PostForm.js';
import PostsList from "./PostsList.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      postsHidden: false
    }

    this.addPost = this.addPost.bind(this);
    this.handleTogglePostsClick = this.handleTogglePostsClick.bind(this);
    this.upvote = this.upvote.bind(this);
  }

  addPost(post) {
    this.setState({posts: this.state.posts.concat([post])})
  } 

  handleTogglePostsClick(){
    console.log('hiding')
    this.setState({postsHidden: !this.state.postsHidden})
  }

  upvote(index) {
    const newPosts = [...this.state.posts];
    newPosts[index].upvotes += 1;
    newPosts.sort((a,b) => b.upvotes - a.upvotes)
    this.setState({posts: newPosts})
  }


  render() {
    const renderPostButton = () => {
      if(this.state.postsHidden) {
        return "Show Posts"
      } else {
        return "Hide Posts"
      }
    }

    const renderPostList = () => {
      if(!this.state.postsHidden){
        return  <PostsList upvote={this.upvote} posts={this.state.posts} />
      }
    }

    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
            <h1>Project Reddit</h1>
          </div>

         {renderPostList()}

          <button onClick={this.handleTogglePostsClick}>{renderPostButton()}</button>

         <PostForm addPost={this.addPost}/>

        </div>
      </div>
    );
  }
}

export default App;
