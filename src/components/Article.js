import React, { Component } from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';


class Article extends Component{
    constructor({match}){
        super();
        this.state = {
            markdown: "",
            property: {},
            title: "これはテスト用の記事です",
            filepath: "./article/" + match.params.path + ".md"
        };
        this.getMarkdownData();
    }
    
    // 別の記事へ遷移したときに画面再描画のため実行される処理
    componentWillReceiveProps(nextProps){
        if(nextProps.location !== this.props.location){
            const that = this;
            this.setState({
                filepath: "./article/" + nextProps.match.params.path + ".md"
            }, () => {
                that.getMarkdownData();
            })
        }
    }

    getMarkdownData(){
        let that = this;
        const processor = remark().use(reactRenderer);
        fetch(this.state.filepath).then((r) => r.text()).then((text) => {
            const property = text.match(/<!--([\s\S]+)-->/);
            const htmldata = processor.processSync(text).contents;
            that.setState({
                markdown: htmldata,
                property: JSON.parse(property[1])
            });
        });
    }

    render() {
        return (
            <div className="ArticlePage">
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