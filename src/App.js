import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SuDiNoi from "./components/pages/SuDiNoi";
import MainTemplate from "./MainTemplate";
import Home from "./components/pages/Home";
import Curiosita from "./components/pages/Curiosita";
import Shop from "./components/pages/Shop";
import Prenotazioni from "./components/pages/Prenotazioni";

function App() {
  //const [deviceType, setDeviceType] = React.useState("");
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sudinoi" component={SuDiNoi} />
          <Route exact path="/curiosita" component={Curiosita} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/prenotazioni" component={Prenotazioni} />
          <Route exact path="/shop/fucili" component={Shop} />
          <Route exact path="/shop/pistole" component={Shop} />
          <Route exact path="/shop/abbigliamento" component={Shop} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
