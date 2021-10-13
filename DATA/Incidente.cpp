#include <iostream>
#include <string.h>
#include <iomanip>
#include <string>

#include "Incidente.h"

using namespace std;

Incidente::Incidente() {

}

Incidente::Incidente(char p[12], int a, char d[11], char o[6], char l[105], char n[85], int i, int f, int r, int m, bool pd, bool v, bool c, bool mp, char lz[17]) {
	setProtocollo(p);
	setAnno(a);
	setData(d);
	setOra(o);
	setLocalita(l);
	setNaturaIncidente(n);
	setIllesi(i);
	setFeriti(f);
	setRiservati(r);
	setMorti(m);
	setPedoni(pd);
	setVelocipedi(v);
	setCiclomotori(c);
	setMezziPesanti(mp);
	setLocalizzazione(lz);
}

void Incidente::setAll(char p[12], int a, char d[11], char o[6], char l[105], char n[85], int i, int f, int r, int m, bool pd, bool v, bool c, bool mp, char lz[17]) {
	setProtocollo(p);
	setAnno(a);
	setData(d);
	setOra(o);
	setLocalita(l);
	setNaturaIncidente(n);
	setIllesi(i);
	setFeriti(f);
	setRiservati(r);
	setMorti(m);
	setPedoni(pd);
	setVelocipedi(v);
	setCiclomotori(c);
	setMezziPesanti(mp);
	setLocalizzazione(lz);
}

void Incidente::setProtocollo(char protocollo[12]) {
	strcpy_s(this->protocollo, protocollo);
}

void Incidente::setAnno(int anno) {
	this->anno = anno;
}

void Incidente::setData(char data[11]) {
	strcpy_s(this->data, data);
}

void Incidente::setOra(char ora[6]) {
	strcpy_s(this->ora, ora);
}

void Incidente::setLocalita(char localita[105]) {
	strcpy_s(this->localita, localita);
}

void Incidente::setNaturaIncidente(char naturaincidente[85]) {
	strcpy_s(this->naturaincidente, naturaincidente);
}

void Incidente::setIllesi(int illesi) {
	this->illesi = illesi;
}

void Incidente::setFeriti(int feriti) {
	this->feriti = feriti;
}

void Incidente::setRiservati(int riservati) {
	this->riservati = riservati;
}

void Incidente::setMorti(int morti) {
	this->morti = morti;
}

void Incidente::setPedoni(bool pedoni) {
	this->pedoni = pedoni;
}

void Incidente::setVelocipedi(bool velocipedi) {
	this->velocipedi = velocipedi;
}

void Incidente::setCiclomotori(bool ciclomotori) {
	this->ciclomotori = ciclomotori;
}

void Incidente::setMezziPesanti(bool mezzipesanti) {
	this->mezzipesanti = mezzipesanti;
}

void Incidente::setLocalizzazione(char localizzazione[17]) {
	strcpy_s(this->localizzazione, localizzazione);
}

void Incidente::print() {
	cout << "---------------------------------------------------------\n";
	cout << "Protocollo: " << string(protocollo) << "\n";
	cout << "Anno: " << anno << "\n";
	cout << "Data: " << string(data) << "\n";
	cout << "Ora: " << string(ora) << "\n";
	cout << "Localita: " << string(localita) << "\n";
	cout << "Natura incidente: " << string(naturaincidente) << "\n";
	cout << "Illesi: " << illesi << "\n";
	cout << "Feriti: " << feriti << "\n";
	cout << "Riservati: " << riservati << "\n";
	cout << "Morti: " << morti << "\n";
	cout << "Pedoni: " << pedoni << "\n";
	cout << "Velocipedi: " << velocipedi << "\n";
	cout << "Ciclomotori: " << ciclomotori << "\n";
	cout << "Mezzi pesanti: " << mezzipesanti << "\n";
	cout << "Coordinate: " << string(localizzazione) << "\n";
	cout << "--------------------------------------------------------\n";
}

char* Incidente::getProtocollo() {
	return protocollo;
}


