import React from 'react';
import { partnersImage } from '../asset/data';

const Partners = () => {
  return (
    <div className='bg-gray-100 w-screen  py-8'>
        <div className='w-[80%]  m-auto text-center'>
            <h2 className='text-[20px] font-semibold md:text-[23px]'>Our Partners</h2>
            <div className='w-full flex items-center justify-between mt-3'>
                {
                  partnersImage.map(image => {
                    return(
                    <div className='w-[10%]'>
                      <img src={image.image} alt="our partners" />
                    </div>)
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default Partners;