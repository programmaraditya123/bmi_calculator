import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Cards.css';
//import tax from "./tax.png";
import { NavLink } from 'react-router-dom';


const Cards =(props)=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        
        style={{background:"rgba(99, 159, 171)"}}
        image="/tax.png"
        title="tax calculator"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align='center'>
         <NavLink to={props.to} className="deco"> <p>{props.name}</p></NavLink>
        </Typography>
        <div className='titl'>

        <Typography variant="body2" color="text.secondary" align="justify">
          {props.title}
        </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default Cards;
