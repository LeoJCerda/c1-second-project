// eslint-disable-next-line no-unused-vars
import React from 'react' 
import { Link, useNavigate } from 'react-router-dom'
import { useRecipeStates } from '../Context/Context'
import { routes } from '../utils/routes'


const Navbar = () => {
  const {setSearch} = useRecipeStates()
  const navigate = useNavigate()
<<<<<<< HEAD
  
=======


  const logout = () => {
    localStorage.removeItem('user')
    window.location.reload()
  }
>>>>>>> 0cbf8052012323980bc095984a9488a8cda075f9
  return (
    <div className='navbar'>
        <div className='links'>
          <button onClick={() => navigate(-1)}>↩Back</button>
            <Link to={routes.home}><h4 className='link'>Home</h4></Link>
            <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
            <Link to={routes.about}><h4 className='link'>About</h4></Link>
            <Link to={routes.recipes}><h4 className='link'>Recetas</h4></Link>    
        </div>
        <input className='search' type="text" onBlur={(e) => setSearch(e.target.value)}/>
        <button onClick={logout}>Logout</button>
    </div>
  )
}



export default Navbar