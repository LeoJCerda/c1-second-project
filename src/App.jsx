import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Recipes from './Pages/Recipes'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound'
import { routes } from './utils/routes'
import PokeList from './Pages/PokeList'
import Pokemon from './Pages/Pokemon'
import { useState } from 'react'


function App() {

  const [name, setName ] = useState(' ')

  return (
    <div className='app'>
      <Navbar name={name} setName={setName}/>
      <Routes>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
          <Route path={routes.about} element={<About/>}/>
          <Route path={routes.recipes} element={<Recipes/>}/>
          {/* Ejemplo de useParams */}
          <Route path={routes.pokelist} element={<PokeList/>}/>
          <Route path={routes.pokemon} element={<Pokemon/>}/>
          <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
