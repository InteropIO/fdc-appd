# FDC3 Application Directory Web Service

A very basic example of a FDC3 application directory web service. It is implemented as a tiny express web server that listens on defined port and exposes three different restful end points. There is currently no database but a single json file (data.json) to retrieve applications data from.

### Install the server
```
git clone git@github.com:ChartIQ/fdc-appd.git 
cd fdc-appd
npm install
```

### Run it
```
npm start
```

## API Resources

- [GET /v1/apps/](#get-all-apps)
- [GET /v1/apps/{appId}](#get-a-single-app)
- [GET /v1/tags](#get-all-tags)
- [POST /v1/apps](#create-an-app)
- [POST /v1/apps/search](#search-apps)

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

### Create an app
Example: POST http:/localhost/v1/apps/

Status code: 500
```
{
    message: 'Not implemented',
    code: 0
}
```
