var fs = require('fs-extra');
var path = require('path');
var cwd = process.cwd();
module.exports = (opts) => new Promise(resolve => {
  const options = opts || {};
  const config = opts.config;
  const sources = typeof opts.source === 'string' ? [opts.source] : opts.source;
  const destination = opts.destination || '.';
  sources.forEach(source=>{
    const resolvedSource = path.resolve(cwd, source);
    const resolvedDestination = path.resolve(cwd, config.dir, destination, source);
    fs.copySync(resolvedSource, resolvedDestination);
  })
  resolve(true);
});
