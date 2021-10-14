#include "Incidente.h"

Incidente::Incidente(){
    Anno = 0;
    Illesi = 0;
    Feriti = 0;
    Riservata = 0;
    Morti = 0;
    Pedoni = false;
    Velocipedi = false;
    Ciclomotori = false;
    MezziPesanti = false;
    LocalizzazioneX = 0;
    LocalizzazioneY = 0;
}


Incidente::Incidente(
    char const* Protocollo,
    int Anno,char const* Data,
    char const* Ora,char const* Localita,
    char const* NaturaIncidente,int Illesi,
    int Feriti,int Riservata,int Morti,
    bool Pedoni,bool Velocipedi,bool Ciclomotori,
    bool MezziPesanti,double LocalizzazioneX,double LocalizzazioneY) 
    : Anno(Anno),Illesi(Illesi),Feriti(Feriti),Riservata(Riservata),Morti(Morti),Pedoni(Pedoni),
    Velocipedi(Velocipedi),Ciclomotori(Ciclomotori),MezziPesanti(MezziPesanti),
    LocalizzazioneX(LocalizzazioneX),LocalizzazioneY(LocalizzazioneY) {
        strcmp(this->Protocollo,Protocollo);
        strcmp(this->Data,Data);
        strcmp(this->Ora,Ora);
        strcmp(this->Localita,Localita);
        strcmp(this->NaturaIncidente,NaturaIncidente);
    }


bool stringToBool(string s){
    if(s == "true") return true;
    else return false;
}


void Incidente::print(){
    log("","----------------------------------------");
    log("Protocollo:", Protocollo);
    log("Anno:",Anno);
    log("Data:",Data);
    log("Ora:",Ora);
    log("Localita:",Localita);
    log("NaturaIncidente:",NaturaIncidente);
    log("Illesi:",Illesi);
    log("Feriti:",Feriti);
    log("Riservata:",Riservata);
    log("Morti:",Morti);
    if(Pedoni) log("Pedoni:","true");else log("Pedoni:","false");
    if(Velocipedi) log("Velocipedi:","true");else log("Velocipedi:","false");
    if(Ciclomotori) log("Ciclomotori:","true");else log("Ciclomotori:","false");
    if(MezziPesanti) log("MezziPesanti:","true");else log("MezziPesanti:","false");
    log("X:",LocalizzazioneX);
    log("Y:",LocalizzazioneY);
    log("","----------------------------------------");
}

Incidente Incidente::parseVectorStringToIncidente(vector<string>& V){

    return Incidente(
        V[Protocollo_C].c_str(),
        stoi(V[Anno_C]),
        V[Data_C].c_str(),
        V[Ora_C].c_str(),
        V[Localita_C].c_str(),
        V[NaturaIncidente_C].c_str(),
        stoi(V[Illesi_C]),
        stoi(V[Feriti_C]),
        stoi(V[Riservata_C]),
        stoi(V[Morti_C]),
        stringToBool(V[Pedoni_C]),
        stringToBool(V[Velocipedi_C]),
        stringToBool(V[Ciclomotori_C]),
        stringToBool(V[MezziPesanti_C]),
        stod(V[LocalizzazioneX_C]),
        stod(V[LocalizzazioneY_C])
    );
    
}