import React, { Component } from "react"
import '../style/PopUp.css';

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  }

  render() {
    const {incidente} = this.props
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
