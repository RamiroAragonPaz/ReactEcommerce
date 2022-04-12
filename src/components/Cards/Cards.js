import './Cards.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from '../CardButtons/ItemCount';
import ItemDetail from '../ListProducts/ItemDetail/ItemDetailContainer'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard( {data} ) {
  const { title, description, category,  price, duration, image, id, stock, initial} = data
  return (
    
    <Card className="card" sx={{ minWidth: 275 }}>
      <Link to={`/${category}/${id}`}>
        <CardContent>
          <div className="image-container">
          <img className="image"  src={`./${image}`} alt={image} />
          </div>
          <Typography class="Typography"variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <p>{description}</p>
          </Typography>
          <Typography class="Typography"variant="body2">
            <p>Precio: ${price}</p>
            <p>Duración: {duration}</p>
          </Typography>
        </CardContent>
        <CardActions className='seeMore'>
        <Button color="error" variant="contained" >Ver Más</Button>
        </CardActions>
      </Link>
    </Card>
    
  );
}
