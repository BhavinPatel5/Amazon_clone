import React from 'react'
import { FooterBottomList } from '../../Constants'

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
        <div className='max-w-5x1 mx-auto px-4'>
            <div className='grid grid-cols-3 md:grid-cols-5 mdl:grid-cols-6 lgl:grid-cols-8 gap-3 place-items-center text-gray-400'>
                {
                    FooterBottomList.map((item)=>(
                        <div className="group cursor-pointer" key={item.id}>
                            <h3 className='footerBottomTitle '>{item.title}</h3>
                            <p className='footerBottomText'>{item.Descr}</p>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default FooterBottom