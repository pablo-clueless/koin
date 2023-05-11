import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { Footer, InfiniteRowScroll, Member, Navbar, OSClient, RoadMap, Tab, TabPanel } from 'components'
import { OS_CLIENTS, HERO_IMAGES, ROAD_MAP, TEAM_MEMBERS, SPONSORS } from 'constant'
import { Container } from 'layouts'
import {  } from 'assets'

const initial = {x: '100%', opacity: 0}
const animate = {x: 0, opacity: 1, dur: 0.5}
const transition = {type: 'spring', stiffness: 80, dumping: 5, restDelta: 0.001}

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [tab, setTab] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      if(currentIndex === 3) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(current => current + 1)
      }
    }, 5000)
    return () => clearInterval(interval)
  })

  return (
    <>
    <Navbar />
    <Container className='md:h-[70vh] bg-hero bg-cover bg-center'>
      <section className='w-full flex flex-col md:flex-row items-center gap-4 py-20'>
        <div className='w-full md:w-1/2'>
          <p className='text-base md:text-xl text-white font-extrabold uppercase tracking-[8px]'>invest. trade. earn</p>
          <p className='text-5xl md:text-8xl text-white font-bold mb-5'>a new era cryptocurrency</p>
          <p className='text-gray-200 text-sm md:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae repellendus officia eos, quod impedit voluptatibus! Ex consectetur numquam commodi harum, soluta nihil vitae ducimus voluptas facere velit officiis quis neque! Hic repellat laborum fugiat dolores cupiditate fugit? Saepe, minus. Ea totam pariatur et, accusamus at vitae aliquam? Facilis, reiciendis. Nihil nemo maiores, pariatur vero dolore distinctio, numquam sint odio esse quae officia vel reiciendis quo eveniet, ratione sit officiis expedita!</p>
          <div className='w-full flex items-center gap-4 mt-5'>
            <button className='h-[40px] bg-white text-indigo-500 rounded-md px-4'>
              read whitepaper
            </button>
            <button className='h-[40px] bg-indigo-500 text-white rounded-md px-4'>
              view on etherscan
            </button>
          </div>
        </div>
        <div className='w-full flex-1 flex items-center justify-center overflow-hidden'>
          {HERO_IMAGES.map(({image}, index) => (
            <motion.img
              initial={initial}
              whileInView={animate}
              transition={transition}
              key={index}
              src={image}
              alt='hero images'
              className={`w-full ${currentIndex === index ? 'block' : 'hidden'}`}
            />
          ))}
        </div>
      </section>
    </Container>
    <Container className='flex items-center gap-4 overflow-hidden'>
      <InfiniteRowScroll images={SPONSORS} />
    </Container>
    <Container id='about' className='bg-gray-200'>
      <section className='w-full flex flex-col items-center py-5'>
        <p className='text-gray-600 font-bold uppercase'>about</p>
        <div className='w-full my-10'>
          <p className='text-xl text-indigo-500 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum amet cumque, perspiciatis placeat quis recusandae non aut in perferendis laborum dolore illum deleniti, beatae quidem, fugiat minima eum odio suscipit corrupti et adipisci aperiam modi nobis quaerat. Debitis expedita officia officiis dolorum recusandae numquam voluptates consectetur voluptatibus explicabo consequatur, dicta maiores ad itaque esse quo magni? Quidem, facilis. Quod debitis illum amet expedita atque at et modi totam perspiciatis vero odio cumque quas quia necessitatibus, optio ea dicta laudantium voluptate nostrum, ut laborum. At impedit ab animi cum doloremque pariatur, debitis sunt quo dignissimos veritatis in ea placeat et quam doloribus illo, odio amet repellendus voluptatum tempore nemo deleniti voluptates vitae obcaecati. Iusto, delectus odio molestiae alias fuga error maiores nemo in earum. Atque animi fugiat excepturi alias, eveniet ducimus dolorum exercitationem cupiditate voluptatem aut placeat, deserunt optio! Quae laborum nulla quasi est adipisci magnam minima accusamus laudantium dolorum ipsa, porro nisi esse. Voluptas asperiores rerum iure accusantium quas. Placeat nam minus totam illo sed quia rerum iusto, obcaecati aliquid!
          </p>
        </div>
      </section>
    </Container>
    <Container  id='tokenomics'>
      <section className='w-full flex flex-col items-center py-5'>
        <p className='text-indigo-500 font-bold uppercase'>tokenomics</p>
      </section>
    </Container>
    <Container id='roadmap'>
      <section className='w-full flex flex-col items-center py-5 overflow-hidden'>
        <p className='text-indigo-500 font-bold uppercase'>roadmap</p>
        <div className='flex flex-col items-center gap-10 my-10'>
          <div className='flex items-center gap-4'>
            {ROAD_MAP.map((_, index) => (
              <Tab key={index} index={index} onClick={() => setTab(index)} value={tab} />
            ))}
          </div>
          {ROAD_MAP.map((phase, index) => (
            <TabPanel key={index} value={tab} index={index}>
              <RoadMap {...phase} />
            </TabPanel>
          ))}
        </div>
      </section>
    </Container>
    <Container id='team'>
      <section className='w-full flex flex-col items-center py-5'>
        <p className='text-indigo-500 font-bold uppercase'>team</p>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-10'>
          {TEAM_MEMBERS.map((member, index) => (
            <Member key={index} {...member} />
          ))}
        </div>
      </section>
    </Container>
    <Container id='download'>
      <section className='w-full flex flex-col items-center py-5'>
        <p className='text-indigo-500 font-bold uppercase'>download</p>
        <div className='w-full flex flex-wrap items-center gap-4 my-10'>
          {OS_CLIENTS.map((client, index) => (
            <OSClient key={index} {...client} />
          ))}
        </div>
      </section>
    </Container>
    <Footer />
    </>
  )
}

export default Home