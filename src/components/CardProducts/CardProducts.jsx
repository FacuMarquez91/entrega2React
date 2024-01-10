
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardProducts = ( { char }) => {
  const {image, title, description, category} = char;
  return (
    <Card sx={{ maxWidth: 200, height: '100%' }} style={{ backgroundColor: "rgba(30, 148, 163, 0.685)", display: 'flex', flexDirection: 'column' }}>
      <CardActionArea style={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="140"
          image ={image}
          style={{ maxHeight: 100, objectFit: 'cover' }}
          alt="Calza deportiva mujer"
        />
        <CardContent >
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary"style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '2em' }}>
            {description}
          </Typography>
          <Typography variant="body1" color="black" >
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{  justifyContent: 'center' }}>
        <Button size="small" color="primary" style={{ border: '1px solid #000', backgroundColor: "white" }} >
          COMPRAR
        </Button>
      </CardActions>
    </Card>

    
  );
}

export default CardProducts;