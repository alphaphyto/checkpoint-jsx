import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from "./name";
import Price from "./price";
import Description from "./description";
import Image from "./image";


const Carte = ()  => {
  return (
    <Card style={{ width: '18rem' }}>
        <Image />
      <Card.Body>
        <Card.Title><Name /></Card.Title>
        <Card.Text> <Price/> </Card.Text>
        <Card.Text><Description/> </Card.Text>
        <Button variant="primary">Achetez</Button>
      </Card.Body>
    </Card>
  );
}

export default Carte;