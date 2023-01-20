import React from 'react';
import ArticleList from '../../Components/ArticleList/ArticleList';
import SearchPanel from '../../Components/SearchPanel/SearchPanel';
import Container from '@mui/material/Container';

const HomePage = () => {
    return (
        <Container className='container'>
            <SearchPanel />
            <ArticleList/>
        </Container>
    );
};

export default HomePage;