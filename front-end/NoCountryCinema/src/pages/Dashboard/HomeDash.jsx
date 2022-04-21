import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';
import './admin.css'

const HomeDash = () => {
  const [movieList, setMovieList] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const endPoint = 'https://nocountry-c4g17-api.herokuapp.com/api/movies';
     axios
      .get(endPoint, movieList)
      .then((res) => {
        const apidata = res.data.response;

        setMovieList(apidata);
      })
      .catch((error) => {
        console.log(error);
        swal({ title: 'ops', icon: 'error' });
      });
  }, []);

  useEffect(() => {
    const endPoint = 'https://nocountry-c4g17-api.herokuapp.com/api/users';
     axios
        .get(endPoint, userList)
        .then((res) => {
            const userObtenidos = res.data.users;
            setUserList(userObtenidos);
        })
        .catch((error) => {
            console.log(error);
            sweetAlert({ title: 'ops', icon: 'error' });
        });
}, []);



  return (
    <Container className='cent'>
      <div className="mt-2 row row-cols-2 row-cols-md-2 g-2 align-center">
        <div className="">
          <div className="">
            <div className=''>
              <i className="bix2 bi bi-people-fill"></i>
              <i className="bix2 bi bi-arrow-up"></i>
            </div>
            <div className="">
              <h5 className="">Usuarios registrados : </h5>
              <h1>{userList.length}</h1>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className=''>
              <i className="bix2 bi bi-film"></i>
              <i className=" bix2 bi bi-arrow-up"></i>
            </div>
            <div className="">
              <h5 className="">Peliculas en reproduccion: </h5>
              <h1>{movieList.length}</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>


  )
}

export default HomeDash