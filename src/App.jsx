import { Route, Routes } from 'react-router-dom'
import './App.css'
//import Navbar from './Components/Navbar'
import Recipes from './Pages/Recipes'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound'
import { routes } from './utils/routes'
import Detail from './Pages/Detail'
import Layout from './Layout/Layout'
import { Auth } from './utils/Auth'
import Login from './Pages/Login'
import Favs from './Pages/Favs'

function App() {

  return (
    <div className='app'>
      <Routes>
        {Auth() ? 
        <>
          <Route path='/' element={<Layout/>}>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.about} element={<About/>}/>
            <Route path={routes.recipes} element={<Recipes/>}/>
            <Route path={routes.detail} element={<Detail/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
          </Route>
        </>
        :
        <Route path='/' element={<Login/>}/> 
        }
        
      </Routes>
    </div>
  )
}

export default App
