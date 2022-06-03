import React, { useContext } from 'react'
import { Themecontext } from '../context/Themecontext'

const Navbar = () => {
const {isLight,toggleTheme}=useContext(Themecontext)
  return (
    <div>
        <h3>My Dashboard</h3>
        <button onClick={toggleTheme}>{`Make ${isLight ? "dark":"light"}`}</button>
    </div>
  )
}

export default Navbar