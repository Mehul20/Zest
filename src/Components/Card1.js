import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgb(0,0,0,0.5)',
    margin:'20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',

  },
  desc: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#fff',
  }
});

export default function Card1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/public/SemiFormal.jpeg" 
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Coming Soon!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            I'll be updating this soon with cool blogs and interesting insights!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button target="_blank" href="https://www.mehulrastogi.com/"> Learn More</Button>
      </CardActions>
    </Card>
  );
}
