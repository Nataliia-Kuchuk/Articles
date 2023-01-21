import React, { useState, useContext } from 'react';
import SearchResult from '../SearchResult/SearchResult';
import SearchIcon from '@mui/icons-material/Search';
import { SearchContext } from '../../context/articleContext';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import './SearchPanel.scss';

const SearchPanel = () => {
    const [query, setQuery] = useState<string>('');
    const { value, searchHandler, resetHandler } = useContext(SearchContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            resetHandler();
        }
        searchHandler(event.target.value);
    };

    return (
        <div className='search-panel'>
            <InputLabel className='search-label' htmlFor='search'>
                Filter by keywords
            </InputLabel>
            <TextField
                value={value}
                onChange={handleChange}
                id='search'
                sx={{
                    width: {
                        xs: '70%', sm: '65%', md: '50%'
                    }, height: '50px'
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <SearchResult count={6} />
        </div>
    );
};

export default SearchPanel;
