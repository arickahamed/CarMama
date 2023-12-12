import React from 'react';
import { overviewData } from '../asset/data';

const Overview = () => {
  return (
    <div className='w-screen py-10 bg-gray-200'>
        <div className='w-[85%] m-auto text-center'>
            <h2 className='text-[25px] font-semibold'>Company's Overview Car Services</h2>
            <div className=' md:w-[50%] lg:w-[40%] m-auto flex items-center justify-evenly flex-wrap my-3'>
                {
                    overviewData.map(data => {
                        return(
                            <div className='bg-white font-semibold border border-slate-400 w-[25%] m-2 rounded-md'>
                                <p className='px-2 py-1 text-[11px]'>{data.info}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Overview;