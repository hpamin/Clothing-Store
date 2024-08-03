import React from 'react'
import InfoMainPost from './InfoMainPost'



function InfoMain() {
  return (
    <section className='w-full min-h-[50vh] flex items-center '>
        <div className='w-[90%] h-full py-5 flex justify-evenly items-center m-auto flex-wrap gap-5 max-lg:justify-center'>
            <InfoMainPost />
        </div>
        
    </section>
  )
}

export default InfoMain