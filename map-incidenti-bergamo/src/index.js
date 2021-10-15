import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './models/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/*

### to make the MapContainer working propelly:

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


*/