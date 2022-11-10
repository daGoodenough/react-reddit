import React from "react";
import PostForm from './PostForm.js';

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
            <h1>Project Reddit</h1>
          </div>

          <div className="post-form">
          </div>

         <PostForm/>

        </div>
      </div>
    );
  }
}

export default App;
