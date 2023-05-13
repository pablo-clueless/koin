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
    <div className='w-full cursor-pointer relative'>
      <img src={image} alt={name} className='w-full aspect-[1/1] object-cover' />
      <div className='w-full h-full bg-black/40 hover:bg-transparent flex flex-col items-start justify-end p-4 absolute top-0 left-0'>
        <p className='text-xl text-white font-medium'>{name}</p>
        <p className='text-sm text-white font-semibold'>{role}</p>
        <div className='flex items-center gap-4 mt-2'>
          <a href={github} target='_blank' rel='noreferrer' className='rounded-full p-1 text-2xl text-white'>
            <GithubLogo />
          </a>
          <a href={twitter} target='_blank' rel='noreferrer' className='rounded-full p-1 text-2xl text-white'>
            <TwitterLogo />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Member