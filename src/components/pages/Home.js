import React, { useState, useEffect } from "react";
import CalculateDeviceType from "../smallComponents/CalculateDeviceType";
//import Carosello from "../smallComponents/Carosello";
import ImmaginiProdotti from "../smallComponents/ImmaginiProdotti";

const Home = () => {
  const [deviceType, setDeviceType] = useState("");

  let values = CalculateDeviceType();
  useEffect(() => {
    setDeviceType(values.deviceType);
  }, [values.deviceType, values.windowWidth]);

  const CosaFacciamo = () => {
    const cosaFacciamo = {
      title: `Cosa Facciamo?`,
      summary:
        "Vendita al dettaglio di abbigliamento tattico, elmetti, scarpe, da softair e zaini, vendita, personalizzazione e riparazione di armi da softair e mini poligono. Troverete di seguito le macro aree di tutti i prodotti presenti in negozio. Contattateci in chat per maggiori informazioni.",
    };
    return (
      <>
        <h2 style={{ marginBottom: 0 }}>{cosaFacciamo.title}</h2>
        <p>{cosaFacciamo.summary}</p>
      </>
    );
  };
  return (
    <div>
      <div
        style={
          deviceType === "desktop"
            ? {
                marginBottom: 40,
                textAlign: "center",
                marginLeft: 60,
                marginRight: 60,
              }
            : { marginBottom: 40 }
        }
      >
        <CosaFacciamo />
        <ImmaginiProdotti />
        {deviceType === "desktop" ? "SONO DESKTOP" : "NON SUGNU NENTI"}
      </div>
    </div>
  );
};

export default Home;
