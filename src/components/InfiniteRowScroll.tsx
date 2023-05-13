import { motion } from 'framer-motion'

interface Props {
  images: {
    name: string
    logo: string
  }[]
}

const InfiniteRowScroll = ({images}:Props) => {
  const INFINITE_SCROLL = [...images, ...images, ...images, ...images]

  return (
    <div className='w-full h-[150px] relative overflow-x-scroll'>
      <motion.div className='w-full h-full flex items-center absolute top-1/2 left-0 -translate-y-1/2'>
        {INFINITE_SCROLL.map((image, index) => (
          <img
            key={index}
            src={image.logo}
            alt={image.name}
            className={`w-[100px] md:w-[150px] aspect-[2/1] object-contain transform transition-transform`}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default InfiniteRowScroll