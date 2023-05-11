import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClose: () => void
  className?: string
}

const Backdrop = ({children, onClose, className}:Props) => {

  return (
    <div onClick={() => onClose()} className={`w-screen h-screen grid place-items-center fixed top-0 left-0 ${className}`}>
      {children}
    </div>
  )
}

export default Backdrop