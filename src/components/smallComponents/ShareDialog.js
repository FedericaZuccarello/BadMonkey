import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TumblrIcon,
  FacebookIcon,
  TelegramIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";
import { ButtonGroup } from "@material-ui/core";
const shareUrl = "https://material-ui.com/components/dialogs/";
const iconDimension = 40;
const roundIcon = true;
const socials = [
  {
    name: "Facebook",
    component: (
      <FacebookShareButton url={shareUrl} title={"Facebook"}>
        <ButtonGroup>
          <FacebookIcon size={iconDimension} round={roundIcon} />
          <ListItemText primary={"Facebook"} style={{ marginLeft: "10px" }} />
        </ButtonGroup>
      </FacebookShareButton>
    ),
  },
  {
    name: "Whatsapp",
    component: (
      <WhatsappShareButton url={shareUrl} title={"Whatsapp"}>
        <ButtonGroup>
          <WhatsappIcon size={iconDimension} round={roundIcon} />
          <ListItemText primary={"Whatsapp"} style={{ marginLeft: "10px" }} />
        </ButtonGroup>
      </WhatsappShareButton>
    ),
  },
  {
    name: "Twitter",
    component: (
      <TwitterShareButton url={shareUrl} title={"Twitter"}>
        <ButtonGroup>
          <TwitterIcon size={iconDimension} round={roundIcon} />
          <ListItemText primary={"Twitter"} style={{ marginLeft: "10px" }} />
        </ButtonGroup>
      </TwitterShareButton>
    ),
  },
  {
    name: "Tumblr",
    component: (
      <TumblrShareButton url={shareUrl} title={"Tumblr"}>
        <ButtonGroup>
          <TumblrIcon size={iconDimension} round={roundIcon} />
          <ListItemText primary={"Tumblr"} style={{ marginLeft: "10px" }} />
        </ButtonGroup>
      </TumblrShareButton>
    ),
  },
  {
    name: "Telegram",
    component: (
      <TelegramShareButton url={shareUrl} title={"Telegram"}>
        <ButtonGroup>
          <TelegramIcon size={iconDimension} round={roundIcon} />
          <ListItemText primary={"Telegram"} style={{ marginLeft: "10px" }} />
        </ButtonGroup>
      </TelegramShareButton>
    ),
  },
  {
    name: "Linkedin",
    component: (
      <LinkedinShareButton url={shareUrl} title={"Linkedin"}>
        <ButtonGroup>
          <LinkedinIcon size={iconDimension} round={roundIcon} />
          <ListItemText primary={"Linkedin"} style={{ marginLeft: "10px" }} />
        </ButtonGroup>
      </LinkedinShareButton>
    ),
  },
  {
    name: "Email",
    component: (
      <EmailShareButton url={shareUrl} title={"Email"}>
        <ButtonGroup>
          <EmailIcon size={iconDimension} round={roundIcon} />
          <ListItemText primary={"Email"} style={{ marginLeft: "10px" }} />
        </ButtonGroup>
      </EmailShareButton>
    ),
  },
];
function ShareDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Condividi</DialogTitle>

      <List>
        {socials.map((social) => (
          <ListItem
            button
            onClick={() => handleListItemClick(social.name)}
            key={social.name}
          >
            <ListItemAvatar>{social.component}</ListItemAvatar>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

ShareDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ShareDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
       */}
      <IconButton
        variant="outlined"
        color="primary"
        aria-label="share"
        onClick={handleClickOpen}
      >
        <ShareIcon />
      </IconButton>
      <ShareDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
