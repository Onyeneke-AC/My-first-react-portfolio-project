import React from 'react'
import { NewsData } from '../assets/data/NewsData';
import { Carousel } from './Carousel';

function NewsCarousel() {
  return (
    NewsData.map((item, index) => {
        return( 
            <Carousel item={item} key={index} />
        )
    })
  )
}

export default NewsCarousel
