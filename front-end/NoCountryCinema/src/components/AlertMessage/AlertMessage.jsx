import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

export default function AlertMessage({ variant, message }) {
  return (
    <Alert className='mt-3' variant={variant}>
      <Alert.Heading className='fs-5'>{message}</Alert.Heading>
    </Alert>
  );
}
