//dependencies
import React, { useState, useEffect } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
//redux
import { useDispatch } from "react-redux";
//actions
import { setUserInfo } from '../../../../actions/user_info_actions';
//config
import { USER_NAME } from '../../../../config/generalConfigs';

const HomePageForm = () => {

    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [inputError, setInputError] = useState('');

    const containerClass = inputError ? "home-page__form__input-container home-page__form__input-container--err" : "home-page__form__input-container";

    useEffect(() => {
        //reset user selection if he navigated back to home page
        dispatch(setUserInfo(''));
    }, [dispatch]);

    const submitHandler = (e) => {
        e.preventDefault();

        if (!userName) {
            setInputError('Please enter full name');
            return;
        }
        localStorage.setItem(USER_NAME, userName);
        dispatch(setUserInfo(userName));
    }

    const changeHandeler = (e) => {
        setInputError('');
        setUserName(e.target.value);
    }


    return (
        <form className="home-page__form" onSubmit={submitHandler}>
            <h5 className="home-page__form__header">
                What's your name?
            </h5>
            <div className={containerClass}>
                <label htmlFor="full-name-input">Full Name</label>
                <input
                    id="full-name-input"
                    type="text"
                    onChange={changeHandeler}
                />
                {inputError ? <p>{inputError}</p> : null}
            </div>

            <Button variant="contained" color="primary" type="submit">
                Continue
            </Button>
        </form >
    )
}

export default HomePageForm;
