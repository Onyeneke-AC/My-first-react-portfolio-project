import React from 'react';
import { Button } from '../../../atoms/Button';
import './PropOem.css';

function OemProd() {
  return (
    <div className='prop-oem'>
      <h2 className="sub_h2">
        OEM products
      </h2>
      <p className='info-p'>
        Partner Solutions we offer
      </p>
      <div className="btn_int">
            <Button className='btns' buttonStyle='btn--primary' buttonRoute='/clients' buttonSize='btn--normal'>
                    Read more
            </Button>
        </div>
    </div>
  )
}

export default OemProd
