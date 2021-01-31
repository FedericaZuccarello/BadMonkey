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
import CircularProgress from "@material-ui/core/CircularProgress";
import FullscreenExitTwoToneIcon from "@material-ui/icons/FullscreenExitTwoTone";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    minWidth: 250,
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
  const [showLightbox, setShowLightbox] = React.useState(false);

  return (
    <Card className={classes.root} key={p.key}>
      <CardMedia
        component="img"
        alt={p.title}
        src={p.img ?? <CircularProgress />}
        title={p.title}
      />
      {showLightbox ? (
        <Lightbox
          allowRotate={false}
          images={p.imgs.map((img) => img)}
          onClose={() => {
            setShowLightbox(false);
          }}
        />
      ) : null}

      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="h2">
          {p.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {p.description}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          {`${p.price + 10} euro`}
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardFooterShop setShowLightBox={setShowLightbox} />
      </CardActionArea>
    </Card>
  );
}

function CardFooterShop({ setShowLightBox = () => {} }) {
  const classes = useStyles();
  const handlerClick = (e) => {
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
      {/* <Tooltip title="Aggiungi ai preferiti" arrow>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </Tooltip> */}
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
