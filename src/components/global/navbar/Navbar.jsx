//dependencies
import React from 'react';
//redux
import { useSelector } from "react-redux";
//assets
import Logo from '../../../assets/logo.png';

const Navbar = () => {

    const { userName } = useSelector(state => state.userInfoReducer);

    return (
        <nav className="navbar" >
            <div className="navbar__placeholder"></div>
            <div className="navbar__content">
                <img src={Logo} alt="checkmarx" className="navbar__content__img" />
                {userName ?
                    <p className="navbar__content__text">Welcome: {userName}</p>
                    :
                    null
                }

            </div>
        </nav>
    )
}

export default Navbar;
