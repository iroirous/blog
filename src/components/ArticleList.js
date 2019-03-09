import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import { list } from '../articlelist.js';

class ArticleList extends Component{
    constructor(props){
        super(props);

        this.state = {articleList: list, property: null};
        document.title = "Iroirous Blog";
    }

    render(){
        return(
            <div className="ArticleList">
                <Header />
                {
                    this.state.articleList.reverse().map((item, idx) => 
                        <div key={idx} className="ArticleListItem">
                            <Link to={"./article/" + item.path}>
                                <h2>{item.title}</h2>
                                <div className="ArticleListDate">
                                    {item.date}
                                </div>
                                <div className="ArticleListDescription">
                                    {item.description}
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        );
    }
}
export default ArticleList;