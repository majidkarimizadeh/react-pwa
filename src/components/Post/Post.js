import React, { Component } from 'react'
import styles from './Post.css'
import { Link } from 'react-router-dom'
class Post extends Component {
  render () {
    return (
      <div className={styles.post}>
        <h3><Link to={`/post/${this.props.slug}`}>{this.props.title}</Link></h3>
        <p>
          {this.props.content}
        </p>
      </div>
    )
  }
}

export default Post
