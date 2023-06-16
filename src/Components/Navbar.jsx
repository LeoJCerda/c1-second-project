import React from 'react' 
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../utils/routes'
import Pokemon from '../Pages/Pokemon'

const Navbar = ({name, setName}) => {

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className='navbar'>
        <div className='links'>
          <button onClick={() => navigate(-1)}>↩Back</button>
            <Link to={routes.home}><h4 className='link'>Home</h4></Link>
            <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
            <Link to={routes.about}><h4 className='link'>About</h4></Link>
            <Link to={routes.recipes}><h4 className='link'>Recetas</h4></Link>
            <Link to={routes.pokemon}><h4 className='link'>pokemon</h4></Link>
            <Link to={routes.pokelist}><h4 className='link'>Poke Lista</h4></Link>
            
        </div>

        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        <button onClick={handleSubmit}>Poke Busqueda</button>

    </div>
  )
}



export default Navbar