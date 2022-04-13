import React from 'react'
import { Carro } from '../components/Carousel/Carousel'
import MoviesContainer from '../components/MoviesSection/MoviesContainer'
import MoviesMain from '../components/MoviesSection/MoviesMain'
import Promociones from '../pages/Promociones'


const Home = () => {
    return (
        <>
            <Carro />
            <MoviesMain/>
            <MoviesContainer title='PRÓXIMOS ESTRENOS' />
            <Promociones />
        </>
    )
}

export default Home