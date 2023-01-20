import React, { FC } from 'react';
import './SearchResult.scss';

interface SearchResultProps {
    count: number;
}
const SearchResult: FC<SearchResultProps> = ({ count }) => {
    return <div className='search-result'>Results: {count}</div>;
};

export default SearchResult;
