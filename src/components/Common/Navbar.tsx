import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='w-full z-50 relative'>
      <nav className='w-full fixed top-0 '>
        <ul className='flex justify-end items-center gap-5 p-4 text-white container2'>
          <NavLink to='/'>Personajes</NavLink>
          <NavLink to='/characters'>Buscar</NavLink>
        </ul>
      </nav>
    </header>
  )
}