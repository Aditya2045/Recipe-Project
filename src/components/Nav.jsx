// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'

// const Nav = () => {

//   const navlinks = (
//     <>
//         <div className='flex items-center justify-center gap-10'>
//         <NavLink className={(e) => (e.isActive ? "text-zinc-400" : "text-zinc-300" )} to="/">Home</NavLink>
//         <NavLink className={(e) => (e.isActive ? "text-zinc-400" : "text-zinc-300" )} to="/recipes">Recipes</NavLink>
//         <NavLink className={`px-3 py-2 bg-[#9B177E] rounded-md (e) => (e.isActive ? "text-pink-600" : "" )`} to="/createrecipes">Create Recipe</NavLink>
//     </div>
//     </>
//   )
//   return (
//    <>
//     <nav className='flex justify-start items-center gap-80 mb-10'>
//       <h1 className='text-4xl tracking-tight text-yellow-500 font-bold'>Foodie <span className='font-normal text-zinc-300'>Learn</span></h1>
//       {navlinks}
//     </nav>
//    </>
//   )
// }

// export default Nav

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons (optional)

const Nav = () => {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive ? "text-zinc-400 font-semibold" : "text-zinc-200 hover:text-zinc-300";

  const navlinks = (
    <>
      <NavLink to="/" className={linkClasses}>
        Home
      </NavLink>
      <NavLink to="/recipes" className={linkClasses}>
        Recipes
      </NavLink>
      <NavLink
        to="/createrecipes"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md bg-[#9B177E] text-white hover:bg-pink-700 transition-all ${
            isActive ? "ring-2 ring-pink-400" : ""
          }`
        }
      >
        Create Recipe
      </NavLink>
    </>
  );

  return (
    <nav className="flex items-center justify-evenly   sticky top-0 z-50">
      {/* Logo */}
      <h1 className="md:text-4xl tracking-tight text-yellow-500 font-semibold">
        Foodie <span className="font-normal text-zinc-300">Learn</span>
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">{navlinks}</div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-zinc-300">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-zinc-800 flex flex-col items-center gap-6 py-8 md:hidden shadow-lg">
          {navlinks}
        </div>
      )}
    </nav>
  );
};

export default Nav;
