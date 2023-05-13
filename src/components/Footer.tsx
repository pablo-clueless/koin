import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import { FOOTER_LINKS, COMMUNITY_LINKS } from 'constant'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async(e:FormEvent) => {
    e.preventDefault()
    alert(JSON.stringify({email}))
    setEmail('')
  }

  return (
    <footer className='w-full flex flex-col items-center justify-between gap4 md:gap-10 bg-gradient-to-r from-indigo-500 to-pink-500 mt-auto px-2 md:px-20 pt-20 pb-10'>
      <div className='w-full flex flex-col items-start justify-between py-3 md:py-10 md:flex-row'>
        <div className='w-full flex flex-col items-start'>
          <div className='flex items-center'>
            <p className='text-6xl md:text-8xl text-white font-black'>Koin</p>
          </div>
          <div className='flex flex-col mt-10 md:mt-20'>
            <p className='text-xs text-gray-200 font-semibold'>Send us a message</p>
            <a href='mailto:hello@pepevirus.co' className='text-2xl text-white font-light border-b-2'>
              hello@koin.co
            </a>
          </div>
          <div className='flex items-center gap-4 mt-10'>
            {COMMUNITY_LINKS.map((link, index) => (
              <a key={index} href={link.link} target='_blank' rel='noreferrer' className='bg-gray-300 text-2xl text-indigo-500 hover:bg-white rounded-md p-1 transition-all duration-300'>
                {link.label}
              </a>
            ))}
          </div>
          <form onSubmit={handleSubmit} className='w-full md:w-[500px] h-[50px] flex items-center bg-white p-1 rounded-full mt-5'>
            <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full h-full bg-transparent text-indigo-500 outline-none px-2' placeholder='subscribe to newsletter' required />
            <button className='h-full bg-indigo-500 text-white px-4 rounded-full'>Subscribe</button>
          </form>
        </div>
        <div className='w-full flex flex-wrap items-start justify-between gap-8 py-10 md:w-max md:justify-start md:gap-32 md:py-0'>
          {FOOTER_LINKS.map(({links, title}, index) => (
            <div key={index} className='flex flex-col gap-5'>
              <p className='text-xl text-white font-semibold uppercase'>{title}</p>
              <ul className='flex flex-col gap-3'>
                {links.map(({label, target}, index) => (
                  <Link key={index} to={target} className='text-gray-900 transition-color duration-500 capitalize cursor-pointer hover:text-white'>
                    {label}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row items-center md:justify-between text-sm text-white font-thin text-center'>
        <p>
          <strong className="font-semibold">&ldquo;Koin&rdquo;</strong> and the{' '}
					<strong className="font-semibold">&ldquo;Koin logo&rdquo;</strong> are registered trademarks.
        </p>
        <div className='flex items-center gap-20 md:gap-4 mt-5 md:mt-0'>
          <p>&copy; Copyright {new Date().getFullYear()}</p>
          <Link to='/' className=''>Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer