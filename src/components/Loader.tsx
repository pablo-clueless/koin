
const Loader = () => {
  return (
    <div className='w-screen h-screen grid place-items-center fixed top-0 left-0 !z-40'>
      <div className='flex items-center gap-5 animate-pulse'>
        <div className='bg-indigo-500 rounded-full p-2 md:p-4'></div>
        <div className='bg-indigo-500 rounded-full p-2 md:p-4'></div>
        <div className='bg-indigo-500 rounded-full p-2 md:p-4'></div>
      </div>
    </div>
  )
}

export default Loader