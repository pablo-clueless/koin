interface Props {
  value: number | string
}

const ToolTip = ({value}:Props) => {
  return (
    <div className='w-[50px] bg-white p-1 rounded-sm border absolute -top-8 left-1/2 -translate-x-1/2'>
      <p className='text-sm text-indigo-500 text-center'>{value}</p>
    </div>
  )
}

export default ToolTip