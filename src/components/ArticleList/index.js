import React from 'react';
import Article from '../Article';
import './style.css';

export default function ArticleList({article}) {
    console.log(article);
    const articlesElements = article.map(article => {
        return <li key={article.id}><Article article={article} /></li>;
    });

    return (
        <ul>
            {articlesElements}
        </ul>
    );
}