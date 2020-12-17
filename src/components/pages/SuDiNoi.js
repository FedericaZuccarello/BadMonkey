import React from "react";
import Carosello from "../smallComponents/Carosello";

export default function SuDiNoi({ ...props }) {
  const ChiSiamo = () => {
    const chiSiamo = {
      title: `Chi siamo?`,
      summary:
        "Siamo un negozio fisico di vendita e riparazione di articoli da softair situato al centro di Messina sul Viale San Martino, 286. Organizziamo partite dai Softair per ragazzi ed adulti e affittiamo il necessario a chi vuole divertirsi con i propri amici. Il nostro negozio é munito di un piccolo poligono di tiro per provare le armi che comprerai o raccogliere punti per raggiungere fantastici premi.",
    };
    return (
      <div>
        <h2 style={{ marginBottom: 0 }}>{chiSiamo.title}</h2>
        <p>{chiSiamo.summary}</p>
        <p>{props.location.state.deviceType}</p>
      </div>
    );
  };
  return (
    <>
      <ChiSiamo />
      <Carosello />
    </>
  );
}
