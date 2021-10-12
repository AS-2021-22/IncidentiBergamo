# IMPORTANTE PER PROF. GUALTERONI E PROF. TOGNI

Per ora consegno soltanto la cartella DATA che prevede l'utilizzo di un breve script di python per preparare al caricamento dei dati da CSV sul database.
Il DB è phpmyadmin di XAMPP, provvederò a esportarlo in SQL prossimamente.

Per quanto riguarda lo script è stato usato per invertire il formato data -> da _'DD/MM/YYYY'_ a _'YYYY-MM-DD'_,
e per convertire false/true in 0/1 (mysql memorizza i bool come tinyInt 0-255 nel quale 0 vale false e tutti gli altri numeri true)

Le restanti cartelle per il server nodejs e client react è un programma non ancora finito, al momento visualizza su una mappa gli incidenti mortali.



...da qui in poi mi serviva solo per ricordare cose è tutto pasticciato....

##### to make the MapContainer working propelly:

remember to replace:
```
    "browserslist": {
        "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
        ],
        "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
        ]
    }
```
to:
```
"browserslist": [
    ">0.2%",
    "not dead",
    "not op_mini all"
]
```
in package.json of react application to make the map working propelly

and

import the style in the header of index.html
