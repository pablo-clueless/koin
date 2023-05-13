import { motion } from 'framer-motion'
import { useState } from 'react'

import ToolTip from './ToolTip'

interface Props {
  data: {
    month: string
    amount: number
  }[]
}

const transition = {type: 'spring', stiffness: 100, dumping: 5, restDelta: 0.001, staggerChildren: 0.75}

const Chart = ({data}:Props) => {
  const [showToolTip, setShowToolTip] = useState<number | undefined>(undefined)

  const onMouseEnter = (value: number) => setShowToolTip(value)

  const onMouseLeave = () => setShowToolTip(undefined)

  const getHeight = (value: number) => {
    return ((value / 2000) * 100)
  }

  return (
    <div className='w-full flex flex-col items-center'>
    <div className='w-full h-[300px] flex items-end gap-4'>
      {data.map(({amount}, index) => (
        <div key={index} className='w-4 md:w-8 h-full flex bg-gray-200 cursor-pointer' onMouseEnter={() => onMouseEnter(index)} onMouseLeave={() => onMouseLeave()}>
        <motion.div initial={{height: 0}} whileInView={{height: `${getHeight(amount)}%`, dur: 1}} transition={transition} className='w-full bg-indigo-500 hover:bg-indigo-400 self-end relative'>
          {showToolTip === index && <ToolTip value={amount} />}
        </motion.div>
        </div>
      ))}
    </div>
    <div className='w-full flex items-center gap-4'>
      {data.map(({month}, index) => (
        <p key={index} className='w-4 md:w-8 text-center text-xs md:text-sm'>{month}</p>
      ))}
    </div>
    </div>
  )
}

export default Chart