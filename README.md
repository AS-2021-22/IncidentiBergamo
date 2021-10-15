# MAPPA INCIDENTI MORTALI BERGAMO

### La mappa rappresenta i luoghi in cui sono avvenuti incidenti mortali nel comune di Bergamo.

### Premendo sul luogo dell'incidente viene visualizzato il codice identificativo che se clickato mostra tutte le informazioni relative

<br>
<img src='./SERVER/images/map.png' width='49%'>
<img src='./SERVER/images/info.png' width='49%'>
<br><br>

### **tecnologie usate:**

1. nodeJS server:
    * express
    * mysql
    * cors
    * body-parser
    * dotenv
    * nodemon
<br>
2. mySQL database (XAMPP)

3. ReactJS per il front-end

4. React-leaflet: per la mappa basata su open-street map

5. python: per la creazione dei CSV

6. scss: per generare il css


### **guida per l'installazione:**

0. **requisiti:**
    * node (npm --version)
    * XAMPP
    * git (git --version)
    * python

1. clonare il repository in locale
2. avviare XAMPP generare il database con il file *incidenti_bergamo.sql*
3. eseguire csv_modifier.py per formattare il file incidenti_bergamo_intera.csv (assicurarsi che inputFile corrisponda alla posizione del .csv)
4. importare nel database da csv il file formattato contenente i dati degli incidenti
5. modificare i campi nel file .env, esso contiene le variabili globali e le informazioni per l'accesso al DB (host password e DBname) 
6. da terminale spostarsi nella cartella *SERVER*, avviare il server con il comando *npm start* o *npm test* in caso volessi modificare il codice, il server dovrebbe ascoltare sulla porta 5000 se il DB correttamente connesso
7. da terminale spostarsi nella cartella *map-incidenti-bergamo* e avviare il react-server con il comando *npm start*
8. all'indirizzo *http://localhost:3000* viene visualizzata la mappa con gli incidenti mortali avvenuti nel comune di Bergamo




