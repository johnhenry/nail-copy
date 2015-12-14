var fs = require('fs-extra');
var path = require('path');
var cwd = process.cwd();
module.exports = ({
  config,
  source,
  destination = `.`
}) => new Promise(resolve => {
  const resolvedSource = path.resolve(cwd, source);
  const resolvedDestination = path.resolve(cwd, config.dir, destination);
  if(!fs.existsSync(resolvedDestination)) fs.mkdirSync(resolvedDestination);
  fs.copySync(resolvedSource, resolvedDestination);
  resolve(true);
});
