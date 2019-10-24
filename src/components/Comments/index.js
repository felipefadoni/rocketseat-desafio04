import React, { Component } from 'react';

import './styles.css';

class Comments extends Component {
  render() {
    return (
      <div className="comment">
        <div className="comment-image">
          <img src={this.props.data.author.avatar} alt={this.props.data.author.name} />
        </div>
        <div className="comment-post-user">{this.props.data.content}</div>
      </div>
    );
  }
}

export default Comments;