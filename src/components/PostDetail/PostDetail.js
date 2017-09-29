import React, { Component } from 'react'
import styles from './PostDeatil.css'

class PostDetail extends Component {
  render () {
    return (
      <div className={styles.post}>
        <h3><a href={this.props.slug}>{this.props.title}</a></h3>
        <p>
          {this.props.content}
        </p>
      </div>
    )
  }
}

export default PostDetail
