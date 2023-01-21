import React from 'react';
import { useParams } from 'react-router';
import Article from '../../Components/Article/Article';

const ArticlePage = () => {
    const { id } = useParams() as any
    return (
        <div>
            <Article id={id} />
        </div>
    );
};

export default ArticlePage