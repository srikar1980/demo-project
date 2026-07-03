import React from 'react'
import { sayHello } from '../utils/helpers'

const Home = () => {

  return (
    <div className='home-page'>{sayHello()}</div>
  )
}

export default Home