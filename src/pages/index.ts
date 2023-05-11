import { lazy } from 'react'

const About  = lazy(() => import('./About'))
const Docs  = lazy(() => import('./Docs'))
const Home  = lazy(() => import('./Home'))
const Team  = lazy(() => import('./Team'))

export {About, Docs, Home, Team}