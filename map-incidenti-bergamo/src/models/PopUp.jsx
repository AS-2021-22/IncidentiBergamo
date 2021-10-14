import React, { Component } from "react"
import '../style/PopUp.css';

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  }

  render() {
    //const {incidente} = this.props

    const incidente = {
      Protocollo: '2002/001824',
      Anno: 2002,
      Data: Date('2002-11-14'),
      Ora: '16:00:00',
      Localita: "BERGAMO VIA MAJ all'intersezione semaforizzata con VIA TARAMELLI",
      NaturaIncidente: 'Scontro frontale fra veicoli in marcia',
      Illesi: 1,
      Feriti: 1,
      Riservata: 0,
      Morti: 0,
      Pedoni: false,
      Ciclomotori: true,
      Velocipedi: false,
      MezziPesanti: false,
      Localizzazione: [ 45.6929, 9.6742 ]
    }

    console.log(incidente)
    return (
      <div className="modal">
        <div className="modal_content">
            <h2>ID: Codice Incidente</h2>
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <div className="content">
              PRIMO: qesto testp è un testo fdi prova che serve per riempire la pagina
              SECONDO:  18/07/2021
              TERZO:    Via moroni 7B ponteranica
              ...
          </div>
        </div>
      </div>
    );
  }
}
