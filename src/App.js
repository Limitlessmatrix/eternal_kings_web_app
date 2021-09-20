import React, { Component } from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from './Widgets';
import axios from 'axios';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Guides from './Guides';
import { Home } from '@material-ui/icons';
import './About.css'

// const api = axios.create({
//   baseURL: 'https://localhost:3000/Twitter-Clone/'
// })

class App extends Component {
  
  state = {
    posts: []
  }
  
  constructor() {
    super();
    // this.getPosts();
  }

  // getPosts = async () => {
  //   let data = await api.get("/").then(({ data }) => data);
  //   this.setState({ posts: data });
  // }

  // createPost = async () => {
  //  let res = await api.post('/', { title: "Test", id: 4, author: 'test'
  // });
  // console.log(res);
  // }

  // deletePost = async (id) => {
  //   let data = await api.delete('/${id}')
  //   this.getPosts();
  // }

  // editPost = async (id, val) => {
  //   let data = await api.patch('/${id}', {title: val})
  //   this.getPosts();
  // }

  render() {
  return  (
    <Router>
      <div className="app">
       <header className="App-header">
         {this.state.posts.map(post => <h2 key={post.id}>{post.title}
          <button onClick={()=> this.deletePost(post.id)}>x</button> </h2>)} 
          
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/guides" component={Guides} />
        </Switch>
    
        <Widgets/>
        
       </header> 
      </div>
    
    </Router>
    );
  }
}

export default App;
