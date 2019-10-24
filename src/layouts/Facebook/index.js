import React, { Component } from 'react';
import './style.css';

import Header from './../../components/Header';
import PostList from './../../components/PostList';

class Facebook extends Component {

  render() {
    return(
      <>
        <Header />
        <PostList />
      </>
    );
  }

}

export default Facebook;