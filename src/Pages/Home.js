import React from 'react'
import Banner from '../../src/Components/Home/Banner'
import Products from './Products'

const Home = () => {
  return (
    <div>
        <Banner/>
        <div className='w-full -mt-10 xl:-mt-36 py-10'><Products/></div>
    </div>
  )
}

export default Home