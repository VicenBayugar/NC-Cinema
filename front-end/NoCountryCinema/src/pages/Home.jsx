import React from 'react'
import { Carro } from '../components/Carousel/Carousel'
import MoviesContainer from '../components/MoviesSection/MoviesContainer'
import MoviesMain from '../components/MoviesSection/MoviesMain'


const Home = () => {
    return (
        <>
            <Carro />
            <MoviesMain/>
            <MoviesContainer title='PRÓXIMOS ESTRENOS' />
          
        </>
    )
}

export default Home