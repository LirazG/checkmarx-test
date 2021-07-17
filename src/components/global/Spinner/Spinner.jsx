import React from 'react';

const Spinner = ({ customClassName }) => {
    return (
        <div className={`spinner ${customClassName ? customClassName : ''}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;
