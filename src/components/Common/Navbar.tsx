import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='w-full z-50 relative'>
      <nav className='w-full fixed top-0 mt-7 md:mt-0'>
        <ul className='flex justify-end items-center gap-5 p-4 text-white container2'>
          <NavLink to='/' className='bg-[#CE5502] px-3 py-1 text-md rounded-md'>Personajes</NavLink>
          <NavLink to='/characters' className='bg-[#CE5502] px-3 py-1 rounded-md text-md'>Buscar</NavLink>
        </ul>
      </nav>
    </header>
  )
}