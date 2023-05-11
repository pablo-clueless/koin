interface Props {
  images: {
    name: string
    logo: string
  }[]
}

const InfiniteRowScroll = ({images}:Props) => {
  const INFINITE_SCROLL = [...images, ...images, ...images]

  return (
    <div className='w-full flex items-center overflow-x-scroll'>
      {INFINITE_SCROLL.map((image, index) => (
        <img
          key={index}
          src={image.logo}
          alt={image.name}
          className={`w-[100px] md:w-[150px] aspect-[2/1] object-contain`}
        />
      ))}
    </div>
  )
}

export default InfiniteRowScroll