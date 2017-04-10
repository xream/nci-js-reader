# nci JavaScript reader

JavaScript config files reader for [nci](https://github.com/node-ci/nci).

`data/preload.json` example:

```json
{
  "plugins": ["nci-js-reader"]
}
```

`data/config.js` example:

```js
module.exports = {
  "plugins": [
    "nci-projects-reloader",
    "nci-static-server",
    "nci-rest-api-server",
    "nci-mail-notification",
    "nci-scheduler",
    "nci-classic-ui"
  ],
  "nodes": [
    {
      "type": "local",
      "maxExecutorsCount": 3
    }
  ],
  "http": {
    "host": "0.0.0.0",
    "port": 3000,
    "url": "http://0.0.0.0:3000",
    "static": {
      "locations": [
        {
          "url": "/favicon.ico",
          "root": "node_modules/nci-classic-ui/static/"
        },
        {
          "url": null,
          "root": "node_modules/nci-classic-ui/static/"
        },
        {
          "url": null,
          "root": "data/"
        }
      ]
    }
  },
  "storage": {
    "backend": "leveldown"
  },
  "notify": {
    "mail": {
      "service": "",
      "auth": {
        "user": "",
        "pass": ""
      }
    }
  }
}
```
