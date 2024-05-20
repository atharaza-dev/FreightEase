import React from 'react'
import QuoteGenerator from '../Website/QuoteGenerator/Quote'
function QuoteForVendor() {
    return (
        <>
            <div className="w-full h-full overflow-x-auto fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250 mt-2">
                <QuoteGenerator></QuoteGenerator>
            </div>
        </>
    )
}

export default QuoteForVendor