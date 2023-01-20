import React, { FC } from 'react';
import './SearchResult.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Store';
interface SearchResultProps {
    count: number;
}
const SearchResult: FC<SearchResultProps> = () => {
    const { articles } = useSelector((state: RootState) => state);

    return <div className='search-result'>Results: {articles.length}</div>;
};

export default SearchResult;
