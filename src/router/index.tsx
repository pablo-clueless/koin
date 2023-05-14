import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

import { useConcurrentTransition } from 'hooks'
import { About, Docs, Home, Team } from 'pages'
import { Loader } from 'components'

const Router = () => {
  const location = useConcurrentTransition()

  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/docs' element={<Docs />} />
        <Route path='/team/:id' element={<Team />} />
      </Routes>
    </Suspense>
  )
}

export default Router