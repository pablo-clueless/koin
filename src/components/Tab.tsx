interface Props {
  index: number
  onClick: () => void
  value: number
}

const Tab = ({index, onClick, value}:Props) => {
  return (
    <div
      onClick={() => onClick()}
      className={`h-1 rounded-md cursor-pointer transition-all duration-500 ${index === value ? 'w-8 bg-indigo-500' : 'w-3 bg-gray-400'}`}
    />
  )
}

export default Tab