import React, { FC } from 'react'

import iconArrow from '../assets/icon-arrow.svg'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchIp, selectIp, setInputValue } from '../store/slices/ip.slice'

const Form: FC = () => {
  const dispatch = useAppDispatch()
  const { inputValue } = useAppSelector(selectIp)

  return (
    <form
      className='hero__form'
      onSubmit={e => {
        dispatch(fetchIp(inputValue))
        e.preventDefault()
      }}>
      <div className='hero__actions'>
        <input
          className='hero__input'
          placeholder='Search for any IP adress or domain'
          onChange={e => dispatch(setInputValue(e.target.value))}
          value={inputValue}
        />
        <button type='submit' className='hero__button'>
          <img src={iconArrow} alt='arrow-icon' />
        </button>
      </div>
    </form>
  )
}

export default Form
