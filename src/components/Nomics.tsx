interface Props {
  name: string
  value: number | string
}

const Nomics = ({name, value}:Props) => {
  return (
    <div className='w-full md:w-fit min-w-[300px] flex flex-col items-center border-2 rounded-md p-4'>
      <p className='text-indigo-500 font-bold'>{name}</p>
      <p className='textsm md:text-xl font-medium mt-3'>{value}</p>
    </div>
  )
}

export default Nomics