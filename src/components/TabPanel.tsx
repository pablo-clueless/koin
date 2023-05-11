import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  index: number
  value: number
  className?: string
}

const TabPanel = ({children, index, value, className}:Props) => {
  return (
    <div role='tab-panel' hidden={value !== index} className='w-full'>
      {value === index && (
        <div className={`w-full p-1 ${className}`}>{children}</div>
      )}
    </div>
  )
}

export default TabPanel