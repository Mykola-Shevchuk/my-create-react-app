import React, {Component} from 'react';
import ArticleList from './ArticleList';
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <ArticleList article={articles} />
            </div>
        );
    }
}

export default App;