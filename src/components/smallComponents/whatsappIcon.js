import "../../App.css";
import Fab from "@material-ui/core/Fab";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Tooltip from "@material-ui/core/Tooltip";
export default function WhatsappIcon(props) {
  return (
    <Fab
      style={{
        textDecoration: "none",
        position: "fixed",
        bottom: props.distanzaBottom,
        right: "15px",
        backgroundColor: "#25d366",
        color: "#FFF",
        borderRadius: "35px",
        textAlign: "center",
        fontSize: "0px",
        boxShadow: "2px 2px 2px #999",
        zIndex: "100",
      }}
      aria-label="add"
      href={
        "https://api.whatsapp.com/send?phone=393463995462&text=Salve,%20vorrei%20qualche%20informazione."
      }
    >
      <Tooltip title="Hai bisogno di aiuto?" arrow>
        <WhatsAppIcon fontSize="large" />
      </Tooltip>
    </Fab>
  );
}
