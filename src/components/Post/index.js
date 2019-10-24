import React, { Component } from 'react';

import Comments from '../Comments';

import './styles.css';

class Post extends Component {

  render() {
    return (
      <div className="post">
        <div className="post-user">
          <img src={this.props.data.author.avatar} alt={this.props.data.author.name} />
          <div className="post-user-data">
            <h2>{this.props.data.author.name}</h2>
            <h3>{this.props.data.date}</h3>
          </div>
        </div>
        <div className="post-content">{this.props.data.content}</div>
        {
          this.props.data.comments.map(comment => <Comments key={comment.id} data={comment} />)
        }
      </div>
    );
  }
}

export default Post;