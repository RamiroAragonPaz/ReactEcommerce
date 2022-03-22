import './Cards.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Card className="card" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <p>{props.description}</p>
        </Typography>
        <Typography variant="body2">
        <p>Precio: ${props.price}</p>
        <p>Duración: {props.duration}</p>
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" color="error">Comprar</Button>
      </CardActions>
    </Card>
  );
}