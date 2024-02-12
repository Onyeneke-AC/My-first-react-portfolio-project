import React from 'react';
import './News.css';
import NewsCarousel from '../../../organisms/NewsCarousel';

function News() {
    
    return (
        <div className='news_section'>
      <div className="news">
        NEWS
      </div>
      <div className='news_slide'>
      <div className="news_carousel">
        <div className='news_exact'>
            <NewsCarousel />
            <NewsCarousel />
        </div>
      </div>
      </div>
    </div>
  )
}

export default News
