var fs = require('fs-extra');
var path = require('path');
var cwd = process.cwd();
module.exports = (opts) => new Promise(resolve => {
  const options = opts || {};
  const config = opts.config;
  const source = opts.source;
  const destination = opts.destination || '.';
  const resolvedSource = path.resolve(cwd, source);
  const resolvedDestination = path.resolve(cwd, config.dir, destination);
  if(!fs.existsSync(resolvedDestination)) fs.mkdirSync(resolvedDestination);
  fs.copySync(resolvedSource, resolvedDestination);
  resolve(true);
});
