import React from 'react'
import QuoteGenerator from '../Website/QuoteGenerator/Quote'
import pickup from '../../assets/imgs/pickup.png'

function GenQuote() {
  return (
    <>
      <div className='w-full bg-white p-2 rounded-xl shadow-sm border-1 border-gray-250 fontAlt'>
        <QuoteGenerator></QuoteGenerator>
      </div>
    </>
  )
}

export default GenQuote