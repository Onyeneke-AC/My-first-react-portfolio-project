import React from 'react';
import { Link } from 'react-router-dom';
import "../components/templates/header/News.css";

// const FONT = ['font--news', 'font--logo']

export const Carousel  = ({ item, fontSize }) => {

    // const checkFontSize = FONT.includes(fontSize)? fontSize : FONT[1];

    return (
        <Link to={item.path} className="carousel_link">
            <div className={`carousel`}> { item.news } </div>
        </Link>
    )
};
