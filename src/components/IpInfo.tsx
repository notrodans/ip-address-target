import React, { FC, useEffect, useRef } from 'react'

import { useAppSelector } from '../store/hooks'
import { selectIp } from '../store/slices/ip.slice'

import IpInfoItem from './IpInfoItem'

const IpInfo: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { ip, isp, location } = useAppSelector(selectIp)

  useEffect(() => {
    if (ref.current) {
      const height = ref.current?.offsetHeight
      if (document.documentElement.offsetWidth < 649.98) {
        ref.current.style.transform = `translate(0, -${height / 4}px)`
      } else {
        ref.current.style.transform = `translate(0, -${height / 2}px)`
      }
    }
  }, [ip, isp, location])

  return (
    <section ref={ref} className='ip-info'>
      <div className='ip-info__container'>
        <div className='ip-info__body'>
          <IpInfoItem value={ip} name='ip address' />
          <IpInfoItem value={location.city} name='location' />
          <IpInfoItem value={location.timezone} name='timezone' />
          <IpInfoItem value={isp} name='isp' />
        </div>
      </div>
    </section>
  )
}

export default IpInfo
