import { List } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { NAV_LINKS } from 'constant'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if(offset > 700) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
    {isMenuOpen && (
      <div onClick={() => setIsMenuOpen(false)} className='w-screen h-screen flex flex-col bg-white fixed top-0 left-0 !z-30'></div>
    )}
    <nav className={`w-full flex items-center justify-between px-2 md:px-20 py-4 top-0 left-0 !z-20 ${scrolled ? 'fixed bg-gradient-to-r from-indigo-500 to-pink-500' : 'static bg-white'}`}>
      <button onClick={() => setIsMenuOpen(true)} className='flex md:hidden items-center'>
        <List className='text-3xl' />
      </button>
      <Link to='/' className={`flex items-center text-2xl font-black ${scrolled ? 'text-white' : 'text-indigo-500'}`}>
        Koin
      </Link>
      <div className='hidden md:flex items-center gap-4'>
        {NAV_LINKS.map((link, index) => (
          <a key={index} href={link.target} 
            className={`relative capitalize font-medium transition nav_link ${scrolled ? 'text-white before:bg-white' : 'text-indigo-500 before:bg-indigo-500'}`}>
            {link.label}
          </a>
        ))}
      </div>
      <button className={`px-4 py-2 font-medium rounded-md capitalize ${scrolled ?  'bg-white text-indigo-500' : 'bg-indigo-500 text-white'}`}>
        login
      </button>
    </nav>
    </>
  )
}

export default Navbar