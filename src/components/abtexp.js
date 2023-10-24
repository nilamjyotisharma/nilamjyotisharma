import React from 'react'

const Abtexp = ({mainHeader, duration1, ex1, details1, org1, duration2, ex2, org2, details2}) => {
  return (
    <>
        <div className='flex-col space-y-8 p-8'>
              <div><h1 className='font-bold text-lg uppercase'>{mainHeader}</h1></div>
              <div className='flex-col space-y-1'>
                <div><p className='dark:text-neutral-400 text-neutral-600'>{duration1}</p></div>
                <div><h1 className='font-bold text-lg'>{ex1}</h1></div>
                <div><p className='dark:text-neutral-400 text-neutral-600'>{org1}</p></div>
                <div><p className='dark:text-neutral-400 text-neutral-600'>{details1}</p></div>
              </div>
              <div className='flex-col space-y-1'>
                <div><p className='dark:text-neutral-400 text-neutral-600'>{duration2}</p></div>
                <div><h1 className='font-bold text-lg'>{ex2}</h1></div>
                <div><p className='dark:text-neutral-400 text-neutral-600'>{org2}</p></div>
                <div><p className='dark:text-neutral-400 text-neutral-600'>{details2}</p></div>
              </div>
            </div>
    </>
  )
}

export default Abtexp