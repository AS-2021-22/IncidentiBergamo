#include "../header.h"

#ifndef INCIDENTE_H
#define INCIDENTE_H

#define MAX_protocollo 12
#define MAX_ora 6
#define MAX_data 11
#define MAX_localita 30
#define MAX_naturaincidente 100
    class Incidente{
        private:
            char Protocollo[MAX_protocollo];
            int Anno;
            char Data[MAX_data];
            char Ora[MAX_ora];
            char Localita[MAX_localita];
            char NaturaIncidente[MAX_naturaincidente];
            int Illesi;
            int Feriti;
            int Riservata;
            int Morti;
            bool Pedoni;
            bool Velocipedi;
            bool Ciclomotori;
            bool MezziPesanti;
            double LocalizzazioneX,LocalizzazioneY;
        public:
            Incidente();
            Incidente(char const* Protocollo,int Anno,char const* Data,char const* Ora,char const* Localita,char const* NaturaIncidente,int Illesi,int Feriti,int Riservata,int Morti,bool Pedoni,bool Velocipedi,bool Ciclomotori,bool MezziPesanti,double LocalizzazioneX,double LocalizzazioneY);            
            static Incidente parseVectorStringToIncidente(vector<string>& V);
            void print();
    };

#endif