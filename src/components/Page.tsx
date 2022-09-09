import React, { FC, useEffect } from 'react'

import { useAppDispatch } from '../store/hooks'
import { fetchIp } from '../store/slices/ip.slice'

import Hero from './Hero'
import IpInfo from './IpInfo'
import Map from './Map'

const Page: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchIp(''))
    // eslint-disable-next-line
  }, [])

  return (
    <main className='page'>
      <Hero />
      <IpInfo />
      <Map />
    </main>
  )
}

export default Page
