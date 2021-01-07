import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ChatTwoToneIcon from "@material-ui/icons/ChatTwoTone";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import FullscreenExitTwoToneIcon from "@material-ui/icons/FullscreenExitTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function ItemCardShop(p) {
  const classes = useStyles();

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
      <CardFooterShop setShowLightBox={p.setShowLightBox} />
    </Card>
  );
}

function CardFooterShop({ setShowLightBox = () => {} }) {
  const classes = useStyles();
  const handlerClick = (e) => {
    console.log(e);
    setShowLightBox(true);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <CardActions>
      <Tooltip title="Ingrandisci" arrow>
        <IconButton aria-label="detail" onClick={handlerClick}>
          <FullscreenExitTwoToneIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Aggiungi ai preferiti" arrow>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Condividi" arrow>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </Tooltip>
      <IconButton
        aria-label="chat"
        aria-owns={open ? "mouse-over-chat" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <ChatTwoToneIcon htmlColor="green" />
      </IconButton>
      <Popover
        id="mouse-over-chat"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>
          Invia messaggio su whatsapp per maggiori informazioni su questo
          articolo.
        </Typography>
      </Popover>
    </CardActions>
  );
}
