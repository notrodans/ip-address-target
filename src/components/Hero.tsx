import React, { FC } from 'react'

import bg from '../assets/pattern-bg.png'

import Form from './Form'

const Hero: FC = () => (
  <section className='hero'>
    <div className='hero__background-ibg'>
      <img src={bg} alt='Hero background' />
    </div>
    <div className='hero__container'>
      <div className='hero__body'>
        <h1 className='hero__title'>IP Adress Tracker</h1>
        <Form />
      </div>
    </div>
  </section>
)

export default Hero
