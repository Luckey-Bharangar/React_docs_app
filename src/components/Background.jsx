import React from 'react'

const Background = () => {
  return (
      <>
        <div className='full w-full h-screen z-[2]'>
          <div className='absolute top-[5%] w-full py-10 flex justify-center text-xl text-semibold text-zinc-600'>Documents</div>
          <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[13vw] tracking-tight leading-none font-semibold'>Docs.</h1>
        </div>
      </>
  )
}

export default Background
