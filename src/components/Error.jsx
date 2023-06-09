import React from 'react'

function Error({children}) {
  return (
    <div className='py-2 text-center text-red-600 '>{children} </div>
  )
}

export default Error