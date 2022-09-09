import React, { FC } from 'react'

interface IInfoItem {
  name: string
  value: string | number
}

const IpInfoItem: FC<IInfoItem> = ({ name, value }) => (
  <div className='ip-info__item item-ip-info'>
    <div className='item-ip-info__title'>{name}</div>
    <div className='item-ip-info__body'>{value}</div>
  </div>
)

export default IpInfoItem
