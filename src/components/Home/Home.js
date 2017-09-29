import React, { Component } from 'react'
import Post from '../Post/Post'
import posts from './posts'

class Home extends Component {
  render () {
    return (
      <div>
        {posts.posts.map((post, index) => {
          return <Post key={index} {...post} />
        })}
      </div>
    )
  }
}

export default Home
