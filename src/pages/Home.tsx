import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { Footer, InfiniteRowScroll, Member, Navbar, Nomics, OSClient, RoadMap, Tab, TabPanel } from 'components'
import { OS_CLIENTS, HERO_IMAGES, ROAD_MAP, SPONSORS, TEAM_MEMBERS, TOKENOMICS } from 'constant'
import { Container } from 'layouts'
import { intro_1 } from 'assets'

const initial = {opacity: 0, scale: 0}
const animate = {opacity: 1, scale: 1, dur: 1}
const transition = {type: 'spring', stiffness: 80, dumping: 5, restDelta: 0.001}

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [tab, setTab] = useState(0)

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
    <Container className='md:h-[70vh] bg-indigo-500'>
      <section className='w-full flex flex-col md:flex-row items-center gap-4 py-20'>
        <div className='w-full md:w-1/2'>
          <p className='text-base md:text-xl text-white font-extrabold uppercase tracking-[8px]'>invest. trade. earn</p>
          <p className='text-5xl md:text-8xl text-white font-bold mb-5'>a new era cryptocurrency</p>
          <p className='text-gray-200 text-sm md:text-base'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae repellendus officia eos, quod impedit voluptatibus! Ex consectetur numquam commodi harum, soluta nihil vitae ducimus voluptas facere velit officiis quis neque! Hic repellat laborum fugiat dolores cupiditate fugit? Saepe, minus. Ea totam pariatur et, accusamus at vitae aliquam?
          </p>
          <div className='w-full flex items-center gap-4 mt-5'>
            <button className='h-[40px] bg-white text-indigo-500 rounded-full px-4'>
              read whitepaper
            </button>
            <button className='h-[40px] bg-indigo-500 text-white rounded-full px-4'>
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
    <Container id='about' className='bg-indigo-500/60'>
      <section className='w-full flex flex-col items-center px-0 md:px-10 py-5'>
        <p className='text-white font-bold uppercase'>about</p>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center my-10'>
          <div className=''>
            <p className='text-xl text-white text-center md:text-left'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, iusto, velit facilis provident quod eligendi, vel alias beatae mollitia neque corporis. Dolores, blanditiis! Nostrum, nisi. Suscipit sit atque aperiam non saepe repellat nemo provident nobis porro inventore obcaecati iusto, asperiores similique, odit reiciendis aspernatur nesciunt nam vero fuga doloremque ad veritatis unde.
            </p>
          </div>
          <div className='grid place-items-center'>
            <img src={intro_1} alt='' className='w-1/2' />
          </div>
        </div>
      </section>
    </Container>
    <Container  id='tokenomics'>
      <section className='w-full flex flex-col items-center py-5'>
        <p className='text-indigo-500 font-bold uppercase'>tokenomics</p>
        <div className='w-full md:w-2/3 flex flex-wrap items-center justify-between'>
          <Nomics name='token name' value={TOKENOMICS.name} />
          <Nomics name='token symbol' value={TOKENOMICS.symbol} />
          <Nomics name='token supply' value={TOKENOMICS.supply} />
          <Nomics name='token network' value={TOKENOMICS.network} />
        </div>
        <div className=' my-4'></div>
        <button className='h-[50px] flex items-center bg-indigo-500 text-white px-4 rounded-full'>
          view on etherscan
        </button>
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