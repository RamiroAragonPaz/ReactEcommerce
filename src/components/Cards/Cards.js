import './Cards.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from '../CardButtons/ItemCount';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard( {data} ) {
  const { title, description, price, duration, image, id, stock, initial} = data
  return (
    <Card className="card" sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="image-container">
        <img className="image"  src={`./${image}`} alt={image} />
        </div>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <p>{description}</p>
        </Typography>
        <Typography variant="body2">
          <p>Precio: ${price}</p>
          <p>Duración: {duration}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount id={id} title={title} initial={initial} stock={stock}/> 
      </CardActions>
    </Card>
  );
}
