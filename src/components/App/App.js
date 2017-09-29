import React, { Component } from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import About from '../About/About'
import PostDetail from '../PostDetail/PostDetail'
import posts from '../Home/posts.json'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/post/:slug' component={(props) => {
            let selectedPost = posts.posts.filter((post) => props.match.params.slug === post.slug)
            return <PostDetail {...props} {...selectedPost[0]} />
          }} />
        </div>
      </Router>
    )
  }
}

export default App
