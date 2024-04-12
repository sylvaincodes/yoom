import React from 'react'
import { Row } from './row'

export const Heading = ({ title }: { title: string }) => {
  return (
    <Row className="justify-center">
      <div className='text-2xl text-white font-bold capitalize mb-4'
      >
        {title}
      </div>
    </Row>
  )
}
