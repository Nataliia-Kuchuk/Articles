import React from 'react';
import ArticleList from '../../Components/ArticleList/ArticleList';
import SearchPanel from '../../Components/SearchPanel/SearchPanel';

const HomePage = () => {
    return (
        <div>
            <SearchPanel />
            <ArticleList/>
        </div>
    );
};

export default HomePage;