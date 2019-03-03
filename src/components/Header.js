import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header>
              <h1><Link to="/">Iroirous Blog</Link></h1>
              <ul>
                <li><a href="https://iroirous.github.io/" target="_blank" rel="noopener noreferrer">Homepage</a></li>
                <li><a href="https://twitter.com/us_irir" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://github.com/iroirous" target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
            </header>
        );
    }
}
export default Header;