import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './ArticleList.css';

class ArticleList extends Component{
    constructor(){
        super();

        this.state = {articleList: []};
        fetch('./articlelist.json').then((r) => r.text()).then((json) => {
            this.setState({
                articleList: JSON.parse(json),
                property: null
            });
        });
    }

    render(){
        return(
            <div className="ArticleList">
                <h1>Iroirous Blog (仮)</h1>
                {
                    this.state.articleList.map((item, idx) => 
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