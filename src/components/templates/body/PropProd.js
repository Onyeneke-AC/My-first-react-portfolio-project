import React from 'react';
import { Button } from '../../../atoms/Button';
import './PropOem.css';
import PropOemSliders from '../../../organisms/PropOemSliders';
import { PropProdData } from '../../../assets/data/PropProdData';

function PropProd() {
  return (
    <div className='prop-oem'>
      <h2 className="sub_h2">
        Propiety products
      </h2>
      <p className='info-p'>
        Solutions Developed by Tenece
      </p>
      <PropOemSliders dataItem = {PropProdData}/>
      <div className="btn_int">
            <Button className='btns' buttonStyle='btn--primary' buttonRoute='/clients' buttonSize='btn--normal'>
                    Read more
            </Button>
      </div>
    </div>
  )
}

export default PropProd
