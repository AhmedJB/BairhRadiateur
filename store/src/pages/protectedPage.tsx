import React from 'react'
import PreLoad from '../components/Layout/PreLoad'

type Props = {}

const ProtectedPage = (props: Props) => {
  return <PreLoad>
    <div className='text-5xl'>Hello protected</div>
  </PreLoad>
}

export default ProtectedPage