import React from 'react';
import { trademarkInfo } from '../asset/data';

const Trademark = () => {
  return (
    <div className='w-screen border border-red-500 py-10 bg-gray-200'>
        <div className='w-[85%] m-auto'>
            <h2 className='text-center text-[25px] font-semibold pb-5'>Our Trademark</h2>
            <div className=' md:flex  justify-evenly'>
                {
                    trademarkInfo.map(data => {
                        return(
                            <div className=' my-4 md:w-[30%]'>
                                <img src={data.img} alt={data.title} />
                                <div>
                                    <h3 className='text-[25px] pb-2'>{data.title}</h3>
                                    <p className='text-[15px] text-slate-600'>{data.info}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Trademark;