const inherits = require('util').inherits
const fs = require('fs')
const path = require('path')

exports.register = function(app) {
  const ParentLoader = app.lib.reader.BaseReaderLoader;

  function Loader() {
    ParentLoader.call(this)
  }

  inherits(Loader, ParentLoader)

  Loader.prototype.ext = 'js'

  Loader.prototype._load = function(dir, name, callback) {
    try {
      const content = require(path.join(dir, name + '.' + this.ext))
      callback(null, content)
    } catch (e) {
      callback(e)
    }
  }

  app.lib.reader.register(Loader.prototype.ext, Loader)
}
