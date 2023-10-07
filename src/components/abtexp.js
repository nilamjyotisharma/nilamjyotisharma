import React from 'react'

const Abtexp = ({mainHeader, duration1, ex1, details1, org1, duration2, ex2, org2, details2}) => {
  return (
    <>
        <div className='flex-col space-y-8 p-8'>
              <div><h1 className='font-bold text-lg uppercase'>{mainHeader}</h1></div>
              <div className='flex-col space-y-1'>
                <div><p className='text-neutral-400'>{duration1}</p></div>
                <div><h1 className='font-bold text-lg'>{ex1}</h1></div>
                <div><p className='text-neutral-400'>{org1}</p></div>
                <div><p className='text-neutral-400'>{details1}</p></div>
              </div>
              <div className='flex-col space-y-1'>
                <div><p className='text-neutral-400'>{duration2}</p></div>
                <div><h1 className='font-bold text-lg'>{ex2}</h1></div>
                <div><p className='text-neutral-400'>{org2}</p></div>
                <div><p className='text-neutral-400'>{details2}</p></div>
              </div>
            </div>
    </>
  )
}

export default Abtexp