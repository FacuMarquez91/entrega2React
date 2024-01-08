
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardProducts = (props) => {
  return (
    <Card sx={{ maxWidth: 200 }} style={{ backgroundColor: "orange"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.img}
          alt="Calza deportiva mujer"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <Typography variant="h6" color="black">
            {props.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button size="small" color="primary" style={{ border: '1px solid #000', backgroundColor: "white"}} >
          COMPRAR
        </Button>
      </CardActions>
    </Card>

    
  );
}

export default CardProducts;