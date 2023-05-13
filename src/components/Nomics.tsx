interface Props {
  name: string
  value: number | string
}

const Nomics = ({name, value}:Props) => {
  return (
    <div className='w-fit flex flex-col items-center p-4'>
      <p className='text-xl font-medium text-indigo-500 uppercase'>{value}</p>
      <p className='text-gray-400 font-bold mt-3'>{name}</p>
    </div>
  )
}

export default Nomics