import { Suspense, lazy, useEffect } from 'react'
import { Route } from 'wouter'
import './App.css'
import Header from './components/Header'

const TopStoriesPage = lazy(() => import('./pages/TopStoriesPage'))
const DetailsPage = lazy(() => import('./pages/DetailsPage'))
function App () {
  useEffect(() => {
    document.title = 'Hacker News - Prueba Técnica'
  }, [])
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Route path='/' component={TopStoriesPage} />
          <Route path='/item/:id' component={DetailsPage} />
        </Suspense>
      </main>
    </>
  )
}

export default App
