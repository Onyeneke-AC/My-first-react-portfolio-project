import React from 'react';
import { Button } from '../../../atoms/Button';
import "./Introduction.css";

function Introduction() {
  return (
    <div className="intro" id="home">
        <div className="write_up">
            <h2 className="intro_title">
                Transforming your business with bespoke Technology Solutions
            </h2>
            <p className="intro_p">
                We are a Multi-Competency, Enterprise Transformation & Technology Consulting Firm. We combine expertise and capabilities across many industries and business functions to deliver superior value to our clients.
            </p>
            <div className="btn_int">
                <Button className='btns' buttonStyle='btn--outline' buttonRoute='/about-us' buttonSize='btn--medium'>
                    Read more <i className="fas fa-caret-right"/>
                </Button>
            </div>
        </div>
        <div className="intro_img"><img src="./images/bgs/first_img.png" alt="Tenece" className="img"/></div>
    </div>
  )
}

export default Introduction;
