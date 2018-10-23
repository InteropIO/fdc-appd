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

- [GET /v1/apps/search](#get-all-apps)
- [GET /v1/apps/{appId}](#get-a-single-app)
- [POST /v1/apps](#create-an-app)

### Get all apps
Example: http:/localhost/v1/apps/search

Status code: 200
```
{
  "applications": [{...}],
  "message": "successful"
}
```

### Get a single app
Example: http:/localhost/v1/apps/xapp

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
