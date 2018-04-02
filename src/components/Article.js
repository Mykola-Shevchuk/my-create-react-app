import React, {Component} from 'react';

class Article extends Component {
    state = {
        isOpen: true
    };
    
    handleClick = () => {
      this.setState({
          isOpen: !this.state.isOpen
      });
    };
    
    render() {
        const {article} = this.props;
        const author = this.state.isOpen && <span>{article.author}</span>;
        
        return (
            <div className="">
                <h1>{article.title}</h1>
                <div>
                    {author}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'Close' : 'Open'}
                    </button>
                </div>
                <div>
                    <span>Linked to: </span>
                    <a href={article.url}>{article.url}</a>
                </div>
            </div>
        );
    }
}

export default Article;