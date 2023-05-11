import { motion } from 'framer-motion'

interface Props {
  date: string
  detail: string
  feature: string
  icon: JSX.Element
  status: string
}

const initial = {y: '100%', opacity: 0}
const animate = {y: 0, opacity: 1, dur: 0.5}
const transition = {type: 'spring', stiffness: 80, dumping: 5, restDelta: 0.001}

const RoadMap = ({date, detail, feature, icon, status}:Props) => {
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      transition={transition}
      className='w-full md:w-[500px] flex flex-col items-center bg-white cursor-pointer'
    >
      <div className='w-full flex items-center justify-between px-4 py-5'>
        <div>
          <p className='text-3xl text-indigo-500 font-semibold'>{feature}</p>
          <p className='text-sm text-indigo-500 font-medium mt-5'>status: {status}</p>
          <p className='text-sm text-indigo-900 uppercase'>{date}</p>
        </div>
        <p className='text-6xl text-indigo-500'>{icon}</p>
      </div>
      <div className='w-full px-4 py-10'>
        <p className='first-letter:capitalize text-gray-500'>{detail}</p>
      </div>
    </motion.div>
  )
}

export default RoadMap