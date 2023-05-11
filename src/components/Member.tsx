import { GithubLogo, TwitterLogo } from '@phosphor-icons/react'

interface Props {
  github: string
  image: string
  name: string
  role: string
  twitter: string
}

const Member = ({github, image, name, role, twitter}:Props) => {
  return (
    <div className='w-full flex flex-col items-center bg-gradient-to-tl from-indigo-400 to-pink-400 rounded-md border py-10 cursor-pointer hover:shadow-2xl transition duration-500'>
      <div className='w-full flex flex-col items-center'>
        <img src={image} alt={name} className='w-[150px] h-[150px] object-cover rounded-full mb-5' />
        <p className='text-2xl text-indigo-700 font-semibold'>{name}</p>
        <p className='text-sm text-white font-bold'>{role}</p>
      </div>
      <div className='flex items-center gap-5 mt-5'>
        <a href={github} target='_blank' rel='noreferrer' className='bg-white text-indigo-500 text-2xl rounded-full p-1'>
          <GithubLogo />
        </a>
        <a href={twitter} target='_blank' rel='noreferrer' className='bg-white text-indigo-500 text-2xl rounded-full p-1'>
          <TwitterLogo />
        </a>
      </div>
    </div>
  )
}

export default Member