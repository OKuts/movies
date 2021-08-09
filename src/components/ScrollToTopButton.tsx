// @ts-nocheck
import React from 'react';

const ScrollToTopButton = ({ setShowButton }) => {
    const handleClick = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        setShowButton(false);
    };

    return (
        <div className = 'ant-back-top'>
            <div>
                <div
                    className = 'ant-fade-enter ant-fade-enter-active ant-fade styles_backToTop__Jrpe3' onClick = { handleClick }>
                    <svg xmlns = 'http://www.w3.org/2000/svg' viewBox = '0 0 122.88 122.88'>
                        <path
                            d = 'M122.85,61.43h0a61.39,61.39,0,0,1-61.43,61.41v0h0v0A61.38,61.38,0,0,1,0,61.45H0v0H0A61.35,61.35,0,0,1,61.43,0V0h0V0a61.34,61.34,0,0,1,61.38,61.4ZM61.44,28.67,30.48,63H50.25V86.92H72.62V63H92.4l-31-34.32Z'></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ScrollToTopButton;
