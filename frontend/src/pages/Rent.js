import React from 'react'
import CarouselComponent from './CarouselComponent';
import ButtonsComponent from './ButtonsComponent';

const Rent = () => {
  return (
    <>
    <div className='store-wrapper home-wrapper-2 py-5 fade-in'>
        <div className='container-xxl'>
            <div className='row'>
            <div className='col-12'>
              <CarouselComponent />
            </div>
            <div className='row'>
            <div className='col-12'>
              <ButtonsComponent />
            </div>
            </div>
                
            </div>
        </div>      
    </div>
    </>
  )
}

export default Rent
