import { ReactNode } from 'react'

interface Props {
  color: string
  icon: ReactNode
  label: string
}

const OSClient = ({color, icon, label}:Props) => {
  return (
    <div className='w-full md:w-[300px] flex flex-col items-center bg-white border-2 rounded-md py-20 cursor-pointer hover:border-indigo-500 transition duration-500'>
      <p className='text-6xl' style={{color}}>{icon}</p>
      <p className='text-2xl font-medium text-gray-500 my-5'>{label}</p>
      <button className='w-2/3 h-[40px] bg-indigo-500 text-white rounded-full border border-indigo-500 hover:bg-white hover:text-indigo-500 transition-colors'>
        download
      </button>
    </div>
  )
}

export default OSClient