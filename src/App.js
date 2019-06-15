import React, { Component } from 'react';
import './App.css';
import Article from './components/Article.js';
import { Route, HashRouter, Switch } from 'react-router-dom';
import ArticleList from './components/ArticleList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={ArticleList} />
            <Route path="/article/:path" component={Article} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;