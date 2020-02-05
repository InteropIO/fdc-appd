# FDC3 Application Directory Web Service

A very basic example of a FDC3 application directory web service. It is implemented as a tiny express web server that listens on defined port and exposes three different restful end points. There is currently no database but a single json file (data.json) to retrieve applications data from.

## Finsemble Component Manifest

The format of the 'manifest' field is one that Finsemble should be able to parse. It should feature the same format of a UI component from Finsemble-seed's [UIComponents.json](https://github.com/ChartIQ/finsemble-seed/blob/master/configs/application/UIComponents.json) 


**Locally it runs on port 3030**
### Install and run the server
```
git clone git@github.com:ChartIQ/fdc-appd.git
cd fdc-appd
npm install
npm start
```

## API Resources

- [GET /v1/apps/](#get-all-apps) - This call fetches all apps in the catalog.
- [GET /v1/apps/{appId}](#get-a-single-app) - This call fetches information for a single application specified by an `appId`.
- [GET /v1/tags](#get-all-tags) - Returns an array of all t`ags`.
- [POST /v1/apps/search](#search-apps) - Searches the list of application given a set of parameters.

### Get all apps
GET http:/localhost/v1/apps/search

Status code: 200
```
{
  "applications": [{...}],
  "message": "successful"
}
```

### Get all tags
GET http:/localhost/v1/tags

Status code: 200
```
{
  "tags": ['newrelease', 'pizza'],
  "message": "successful"
}
```


### Get a single app
Example: GET http:/localhost/v1/apps/xapp

Status code: 200
```
{
  "applications": [
    {
      "appId": "xapp",
      ...
    }
  ],
  "message": "successful"
}
```

### Search apps
POST http:/localhost/v1/apps/search

Content-Type: application/json

Body: {
    "text": "",
    "tags": ["death", "Success"]
}

Status code: 200
```
{
  "applications": [
    {
      "appId": "xapp",
      ...
    }
  ],
  "message": "successful"
}
```
