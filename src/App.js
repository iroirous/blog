import React, { Component } from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {markdown: "", title: "これはテスト用の記事です"};
    let that = this;
    fetch('./article/test.md').then((r) => r.text()).then((text) => {
      that.setState({
        markdown: text
      });
    });
  }

  render() {
    const processor = remark().use(reactRenderer);

    return (
      <div className="App">
        <article>
          <div className="header">
            <h1>{this.state.title}</h1>
          </div>
          <div className="content">
            {processor.processSync(this.state.markdown).contents}
          </div>
        </article>
      </div>
    );
  }
}

export default App;
