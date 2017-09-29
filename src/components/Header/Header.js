import React, { Component } from 'react'
import styles from './Header.css'

class Header extends Component {
  render () {
    return <div className={styles.heading}>
      <span>
        Majid
      </span>
      <ul>
        <li><a href={'#'}>Posts</a></li>
        <li><a href={'#'}>About</a></li>
      </ul>
    </div>
  }
}

export default Header
