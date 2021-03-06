import React from 'react';

import "./css/estilosProducto.css";
import "./css/styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import EditaPublicacion from './EditaPublicacion';
import NovaPublicacio from './NovaPublicacio';
import Producto from './Producto';
import Datos from './Datos_bbdd';
import Principal from './principal';
 import Register from './Register';

/*multiIdioma*/
import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import globalTranslations from "./translations/global.json";


import TriaIdioma from './TriaIdioma';
import Main from './paginaMain';
import "./estilosBotonesIdiomas.css";



class App extends React.Component {

  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: <img alt="no img" className="iconoIdiomas" src="https://img.icons8.com/color/48/000000/spain.png" />, code: "es" },
        { name: <img alt="no img" className="iconoIdiomas" src="https://img.icons8.com/color/48/000000/usa.png" />, code: "en" },
        { name: <img alt="no img" className="iconoIdiomas" src="https://img.icons8.com/color/48/000000/china.png" />, code: "ch" },
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup, defaultLanguage: 'es' }
    });
  }

  render() {

    return (

      <>
        {/* pruebas del idioma */}
        <TriaIdioma />
        <BrowserRouter>




          <Switch>

            <Route exact path="/" component={Main} />
            {/* <Route exact path="/registro" component={Register} /> */}
            <Route path="/principal" component={Principal} />
            <Route path="/producto" component={Producto} />
            <Route path="/register" component={Register} />
            <Route path="/datos_bbdd/:idPublicacion" component={Datos} />
            <Route path="/new_publicacion" component={NovaPublicacio} />
            <Route path="/edit_publicacion/:idPublicacion" render={(props) => <EditaPublicacion  {...props} />} />

          </Switch>



        </BrowserRouter>


      </>
    );
  }

}

export default withLocalize(App);