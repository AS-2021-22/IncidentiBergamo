#include "./header.h"

void stringSplitter(vector<string>& v,string s){
    int offset = 0;
    string field = "";
    bool eof = false;
    while(eof == false){
        int pos = s.find(',',offset);
        if(pos == -1) {eof = true; pos = s.size()-1;}
        field = s.substr(offset,pos-offset);
        offset = pos + 1;
        v.push_back(field);
    }
}

void read(){
    fstream CSVreader(NOME_FILE_CSV_INPUT, ios::in | ios::binary);
    if(CSVreader.is_open()){
        string row;
        while(!CSVreader.eof()){
            vector<string> rowV;
            getline(CSVreader,row);
            stringSplitter(rowV,row);
        }
    }
    else cout<<"error"<<endl;
}


int main(){
    read();

    Incidente* i = new Incidente();//("fhosfhs",123,"vod","fhsofs","hfoshfso","fhdsihfisfhs",1,2,3,4,false,true,true,false,2.65365,5.5554);

    i->print();

    return 0;
}