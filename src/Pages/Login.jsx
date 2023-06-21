import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        userName: '',
        password: ''
    })
    const login = () => {
        localStorage.setItem('user', JSON.stringify(user))
        window.location.reload()
    }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Debe loguear para poder ingresar a la página</h3>
        <input type="text" onChange={(e) => setUser({...user, userName: e.target.value})}/>
        <input type="password" onChange={(e) => setUser({...user, password: e.target.value})}/>
        <button onClick={login}>Login</button>
    </form>
  )
}

export default Login