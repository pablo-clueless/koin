import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  id?: string
}

const Container = ({children, className, id}:Props) => {
  return (
    <div id={id} className={`px-2 md:px-20 py-4 ${className}`}>
      {children}
    </div>
  )
}

export default Container