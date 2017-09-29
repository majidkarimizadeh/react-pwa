import React, { Component } from 'react'
import styles from './Header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return <div className={styles.heading}>
      <span>
        Majid
      </span>
      <ul>
        <li><Link to='/'>Posts</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  }
}

export default Header
