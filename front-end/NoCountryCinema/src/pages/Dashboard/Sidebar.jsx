import React from 'react'
import { Link } from 'react-router-dom'
import './admin.css'

const Sidebar = () => {
  return (
    <div >
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white ">
           <Link
             to="#"
             className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
           >
             <span className="bix d-none d-sm-inline mt-5">Dashboard</span>
           </Link >
           <ul
           md={12}
             className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start "
             id="menu"
           >
             <li className="nav-item-sidebar mb-4">
               <Link to='' className="nav-link  hov">
                 <i className="bix bi bi-house "></i>
                 <span className="ms-1 d-none d-sm-inline ">
                   Inicio
                 </span>
               </Link >
             </li>
             <li className="nav-item-sidebar mb-4">
               <Link to='peliculas' className="nav-link hov">
                 <i className="bix bi bi-film"></i>
                 <span className="ms-1 d-none d-sm-inline">
                   Películas
                 </span>
               </Link >
             </li>
             <li className="nav-item-sidebar mb-4">
               <Link to='crearpelicula' className="nav-link hov">
                 <i className="bix bi bi-film"></i>
                 <span className="ms-1 d-none d-sm-inline">
                   Crear película
                 </span>
               </Link >
             </li>
             <li className="nav-item-sidebar mb-4">
               <Link to='usuarios' className="nav-link hov">
                 <i className="bix bi bi-file-person"></i>
                 <span className="ms-1 d-none d-sm-inline">
                   Usuarios
                 </span>
               </Link >
             </li>
           </ul>
         </div>
 </div>

  )
}

export default Sidebar