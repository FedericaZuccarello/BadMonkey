import { Link } from "react-router-dom";
import Abbigliamento from "../../images/immaginiProdottiGenerali/abbigliamentoSoftair.png";
import Accessori from "../../images/immaginiProdottiGenerali/AccessoriDaSoftair.png";
//import Trekking from "../../images/immaginiProdottiGenerali/AttrezzaturaDaTrekking.png";
import Elmetti from "../../images/immaginiProdottiGenerali/ElmettiDaSoftair.png";
import Fucili from "../../images/immaginiProdottiGenerali/FuciliDaSoftair.png";
import Poligono from "../../images/immaginiProdottiGenerali/miniPoligono.png";
import Pistole from "../../images/immaginiProdottiGenerali/PistoleSoftair.png";
import Riparazione from "../../images/immaginiProdottiGenerali/RiparazionePezziDiRicambio.png";
import Scarpe from "../../images/immaginiProdottiGenerali/ScarpeDaSoftairETrekking.png";
import Zaini from "../../images/immaginiProdottiGenerali/ZainiTatticiDaTrakking.png";

export default function ImmaginiProdotti() {
  const ImmagineClick = (props) => {
    return (
      <div>
        <div className="responsiveImg">
          <div className="galleryImg tilt">
            <Link
              to={{
                pathname: "/shop",
              }}
            >
              <img
                src={props.type}
                alt={props.title}
                width="600"
                height="400"
              />
            </Link>
            {/* <div className="descImg">{props.label}</div> */}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <ImmagineClick
        type={Abbigliamento}
        title={"Abbigliamento"}
        label={"Descrizione"}
      />
      <ImmagineClick type={Scarpe} title={"Scarpe"} label={"Descrizione"} />
      <ImmagineClick type={Elmetti} title={"Elmetti"} label={"Descrizione"} />
      <ImmagineClick type={Fucili} title={"Fucili"} label={"Descrizione"} />
      <ImmagineClick type={Pistole} title={"Pistole"} label={"Descrizione"} />
      <ImmagineClick
        type={Accessori}
        title={"Accessori"}
        label={"Descrizione"}
      />
      <ImmagineClick type={Zaini} title={"Zaini"} label={"Descrizione"} />
      <ImmagineClick
        type={Riparazione}
        title={"Riparazione"}
        label={"Descrizione"}
      />
      <ImmagineClick type={Poligono} title={"Poligono"} label={"Descrizione"} />
      <div className="clearfix"></div>
    </div>
  );
}
