import React, { Component } from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import Highlight from 'react-highlight';
import Header from './Header.js';

// 記事内のリンクを新しいタブで開くようにする
function LinkRenderer(props){
    return <a href={props.href} target="noopener noreferrer">{props.children}</a>
}

class Article extends Component{
    constructor({match}){
        super();
        this.state = {
            markdown: "",
            property: {},
            filepath: "./article/" + match.params.path
        };
        this.getMarkdownData();
    }
    
    // 別の記事へ遷移したときに画面再描画のため実行される処理
    componentWillReceiveProps(nextProps){
        if(nextProps.location !== this.props.location){
            const that = this;
            this.setState({
                filepath: "./article/" + nextProps.match.params.path
            }, () => {
                that.getMarkdownData();
            });
        }
    }

    getMarkdownData(){
        let that = this;
        const processor = remark().use(reactRenderer, {
            remarkReactComponents: {
                code: Highlight,
                a: LinkRenderer
            }
        });
        fetch(this.state.filepath).then((r) => r.text()).then((text) => {
            const property = text.match(/<!--([\s\S]+?)-->/);
            const htmldata = processor.processSync(text, {gfm: true}).contents;
            that.setState({
                markdown: htmldata,
                property: JSON.parse(property[1])
            });
        });
    }

    render() {
        document.title = this.state.property.title + " - Iroirous Blog";
        return (
            <div className="ArticlePage">
                <Header />
                <article>
                    <div className="articleHeader">
                        <h1>{this.state.property.title}</h1>
                        <p>{this.state.property.date}</p>
                    </div>
                    <div className="content">
                        {this.state.markdown}
                    </div>
                </article>
            </div>
        );
    }
}
export default Article;