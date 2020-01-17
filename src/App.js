import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Projects from './Projects'

const App = () => {

  let posts = useState([
    {title: "How to Lose a Guy in 10 Days", body: "!Deodorant"},
    {title: "How to Catch A Predator", body: "<18" },
    {title: "Where in the World iS KEVIN MCALLISTER", body: "New York prob"}
  ])

  return (
    <Router>
      <div className="app">
        <div className="nav">
          <Link className='link' to ="/">Home</Link>
          <Link className='link' to ="/about">About</Link>
          <Link className='link' to ="/projects">Projects</Link>
          <Link className='link' to ="/blog">Blog</Link>
          
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/blog' render={() =>
            <Blog posts={posts} />
            } />
        </div>
      </div>
    </Router>
  )
}
export default App;
