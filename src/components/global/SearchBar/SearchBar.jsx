import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
//redux
import { useDispatch } from "react-redux";
//actions
import { setUniversities } from '../../../actions/universities_actions';

const SearchBar = () => {

    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="search-bar">
            <label htmlFor="search_input">
                <SearchIcon />
            </label>
            <input
                id="search_input"
                type="text"
                placeholder="Search..."
                className="search-bar__input"
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                style={{ height: '100%', borderRadius: '0' }}
                onClick={() => dispatch(setUniversities(searchValue))}
            >
                Search
            </Button>
        </div>
    )
}

export default SearchBar;
