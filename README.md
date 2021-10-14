# MAPPA INCIDENTI MORTALI BERGAMO

La mappa 

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

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
