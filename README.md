
# Leaflet Mapping Solution

JavaScript/React application to standardise creation of LeafletJS maps in Stockport Council


## Documentation

Documentation of default and overrides in our configuration can be found in the [GitHub Wiki](https://github.com/smbc-digital/leaflet-mapping-solution/wiki)

  
## Run Locally

Clone the project

```bash
  git clone git@github.com:smbc-digital/leaflet-mapping-solution.git
```

Go to the project directory

```bash
  cd leaflet-mapping-solution
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Local running requires the Environment Variable ```LOCAL_BASEMAP_AUTH_TOKEN``` to be set, this enable base map tiles to be pulled when using ```localhost``` addresses. The relevant value can be found in secrets or request from BI/GIS colleagues.

Running locally, specifiy which map to run by changing the value of ```solution``` in ```webpack.dev.config.js```, the value should be match the folder name of the map you want to view from the ```Configuration``` folder. For example

```
const solution = 'streetlighting'
```
  
## Deployment

This project is deployed using GitHub actions, to deploy the compiled JS to S3 add, commit and push your changes to GitHub.

```bash
  git add .
  git commit -m "{message}"
  git push
```

  
## Acknowledgements

 - [LeafletJS](https://leafletjs.com/)

  
## Authors

- [Stockport Council](https://www.stockport.gov.uk)
