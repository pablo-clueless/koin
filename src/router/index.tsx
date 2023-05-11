import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

import { useConcurrentTransition } from 'hooks/concurrent-transiton'
import { About, Docs, Home, Team } from 'pages'

const Router = () => {
  const location = useConcurrentTransition()

  return (
    <Suspense>
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/docs' element={<Docs />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </Suspense>
  )
}

export default Router