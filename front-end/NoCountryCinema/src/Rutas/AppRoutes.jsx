import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetail/MovieDetails';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import { Login } from '../pages/LoginPage/Login'
import Profile from '../pages/Profile/Profile';
import Admin from '../pages/Dashboard/Admin';
import HomeDash from '../pages/Dashboard/HomeDash';
import ListUser from '../pages/Dashboard/ListUser';
import PeliculasList from '../pages/Dashboard/PeliculasList';
import CreatePelicula from '../pages/Dashboard/CreatePelicula';



const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/detalle/:title' element={<MovieDetails />} />
            
            <Route path='/profile' element={<Profile />} />
            <Route path='/dashboard' element={<Admin />}>
                <Route index element={<HomeDash />} />
                <Route path='peliculas' element={<PeliculasList />} />
                <Route path='crearpelicula' element={<CreatePelicula />} />
                <Route path='usuarios' element={<ListUser />} />
            </Route>


        </Routes>
    )
}

export default AppRoutes