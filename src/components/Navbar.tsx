import { List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { useAppContext } from 'hooks'
import { NAV_LINKS } from 'constant'

const initial = {x: '-100%'}
const animate = {x: 0, dur: 0.5}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const {loggedIn, login} = useAppContext()

  const handleScroll = () => {
    const offset = window.scrollY
    if(offset > 700) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const connectWallet = async() => {
    try {
      if(window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const account = accounts[0]
        const user = { address: account }
        login(user)
      } else {
        alert('Metamask is not installed!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
    {isMenuOpen && (
      <motion.div initial={initial} whileInView={animate} className='w-screen h-screen flex flex-col items-center bg-white fixed top-0 left-0 !z-30 px-4 py-10'>
        <div className='w-full flex items-center justify-end'>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className='text-3xl' />
          </button>
        </div>
        <div className='w-full flex flex-col items-center gap-5 my-auto'>
          {NAV_LINKS.map((link, index) => (
            <a key={index} href={link.target} className='text-xl text-indigo-500 font-medium capitalize' onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
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
      <button onClick={() => connectWallet()} className={`h-[40px] px-4 font-medium rounded-full capitalize ${scrolled ?  'bg-white text-indigo-500' : 'bg-indigo-500 text-white'}`}>
        {loggedIn ? 'wallet connected' : 'connect wallet'}
      </button>
    </nav>
    </>
  )
}

export default Navbar