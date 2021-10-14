import React, { Component } from "react"
import '../style/PopUp.css';

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  }

  render() {
    const {incidente} = this.props

    incidente.Data = new Date(incidente.Data)

    return (
      <div className="modal">
        <div className="modal_content">
            <h2>ID INCIDENTE: {incidente.Protocollo}</h2>
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <div className="content">
            ANNO: {incidente.Anno} <br/>
            DATA: {`${incidente.Data.getDate()}-${incidente.Data.getMonth()+1}-${incidente.Data.getYear() + 1900}`}<br/>
            ORA: {incidente.Ora}<br/>
            LOCALITA: {incidente.Localita}<br/>
            NATURA INC: {incidente.NaturaIncidente}<br/>
            ILLESI: {incidente.Illesi}<br/>
            FERITI: {incidente.Feriti}<br/>
            RISERVATA: {incidente.Riservata}<br/>
            MORTI: {incidente.Morti}<br/>
            PEDONI: {incidente.Pedoni === 0 ? 'false' : 'true'}<br/>
            CICLOMOTORI: {incidente.Ciclomotori === 0 ? 'false' : 'true'}<br/>
            VELOCIPEDI: {incidente.Velocipedi === 0 ? 'false' : 'true'}<br/>
            MEZZIPESANTI: {incidente.MezziPesanti === 0 ? 'false' : 'true'}<br/>
            LOCALIZZAZIONE: {incidente.Localizzazione.toString()}<br/>
          </div>
        </div>
      </div>
    );
  }
}
