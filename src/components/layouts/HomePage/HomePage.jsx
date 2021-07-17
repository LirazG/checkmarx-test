//dependencies
import React from 'react';
//components
import HomePageForm from './HomePageComponents/HomePageForm';
//assets
import FormImg from '../../../assets/homepage.svg';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-page__content">
                <section className="home-page__content__form-section">
                    <HomePageForm />
                </section>
                <section className="home-page__content__img-section">
                    <img className="home-page__content__img-section__img" src={FormImg} alt="home-page" />
                </section>
            </div>
        </div>
    )
}

export default HomePage;
