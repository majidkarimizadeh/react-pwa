import React, { Component } from 'react'
import styles from './PostDeatil.css'

class PostDetail extends Component {
  render () {
    return (
      <div className={styles.post}>
        <h3>{this.props.title}</h3>
        <p>
          {this.props.content}
        </p>
      </div>
    )
  }
}

export default PostDetail
