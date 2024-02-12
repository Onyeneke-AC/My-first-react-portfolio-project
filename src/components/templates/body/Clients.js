import React from 'react';
import ClientsCarousel from '../../../organisms/ClientsCarousel';
import "./PartnersClients.css";
import { Button } from '../../../atoms/Button';

function Clients() {
  return (
    <div className='part--cli'>
        <h2 className='sub_h2'>Our Clients</h2>

        <div className="my-slider">
            <div className="slider">
                <div className="clients_brands">
                    <ClientsCarousel />
                    <ClientsCarousel />
                </div>
            </div>
        </div>
        <div className="btn_int">
            <Button className='btns' buttonStyle='btn--primary' buttonRoute='/clients' buttonSize='btn--normal'>
                    View more
            </Button>
        </div>  
    </div>
  )
}

export default Clients
