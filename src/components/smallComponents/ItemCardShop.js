import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
export default function ItemCardShop(p) {
  const classes = useStyles();
  const handlerClick = () => {
    alert("Ho cliccato");
  };
  return (
    <Card className={classes.root} key={p.key}>
      <CardActionArea>
        <CardMedia component="img" alt={p.title} src={p.img} title={p.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {p.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {p.description}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {`${p.price} euro`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handlerClick}>
          Dettagli
        </Button>
        <Button size="small" color="primary">
          Condividi
        </Button>
      </CardActions>
    </Card>
  );
}