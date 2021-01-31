import "../../App.css";
export default function WhatsappIcon(props) {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=393463995462&text=${props.text}`}
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
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://i.ibb.co/N9P0K9H/239px-Whats-App-svg.png"
        width="60"
        height="60"
        alt="WhatsappIcon"
      />
    </a>
  );
}
