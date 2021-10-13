#pragma once
class Incidente
{
private:
	char protocollo[12];
	int anno;
	char data[11];
	char ora[6];
	char localita[105];
	char naturaincidente[85];
	int illesi;
	int feriti;
	int riservati;
	int morti;
	bool pedoni;
	bool velocipedi;
	bool ciclomotori;
	bool mezzipesanti;
	char localizzazione[20];
public:
	Incidente();
	Incidente(char*, int, char*, char*, char*, char*, int, int, int, int, bool, bool, bool, bool, char*);
	void setAll(char*, int, char*, char*, char*, char*, int, int, int, int, bool, bool, bool, bool, char*);
	void setProtocollo(char*);
	void setAnno(int);
	void setData(char*);
	void setOra(char*);
	void setLocalita(char*);
	void setNaturaIncidente(char*);
	void setIllesi(int);
	void setFeriti(int);
	void setRiservati(int);
	void setMorti(int);
	void setPedoni(bool);
	void setVelocipedi(bool);
	void setCiclomotori(bool);
	void setMezziPesanti(bool);
	void setLocalizzazione(char*);
	void print();
	char* getProtocollo();
};

