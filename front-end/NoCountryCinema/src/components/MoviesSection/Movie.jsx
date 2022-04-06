import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movie = (props) => {
  return (
    <Card bg='dark' border='secondary' className='p-2 m-3 ' style={{ width: '17rem', height: '35rem' }}>
      <Card.Img variant="top" className='img-fluid w-100' style={{objectFit: 'cover', height: '82%'}} src={props.imgUrl} /> 
      <Card.Body className='w-100' style={{height: '18%'}}>
        <Card.Title className='text-wrap text-center'>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Movie;
