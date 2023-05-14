import { Link } from 'react-router-dom'
import { useState } from 'react'

const Cookie = () => {
  const [showAlert, setShowAlert] = useState(true)

  const closeAlert = () => {
    setShowAlert(false)
  }

  return (
    <>
    {showAlert && (
      <div className='w-screen fixed bottom-0 left-0 !z-20 p-2'>
        <div className='w-full flex items-center justify-between bg-white rounded-md border border-indigo-500 px-2 py-3'>
          <p className='text-xs md:text-base text-indigo-500'>
            This website uses cookies to ensure you get the best experience.
            <Link to='/' className='ml-2 underline underline-offset-2'>Learn More</Link>
          </p>
          <div className='flex items-center gap-4'>
            <button onClick={() => closeAlert()} className='h-[40px] bg-white text-indigo-500 border border-indigo-500 rounded-full px-4'>
              reject
            </button>
            <button onClick={() => closeAlert()} className='h-[40px] bg-indigo-500 text-white border border-white rounded-full px-4'>
              accept
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Cookie