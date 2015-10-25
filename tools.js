// read front matter on demand
var matter = require('gray-matter');
var path = require('path');
var fs = require('fs');
var getPlaylists = require('./playlist');
var config = require('./config.js')

/** Returns true if file exists */
function isFile(dir, file){
  var fullPath = path.join(config.sourceRoot, dir, file);
  try {
    fs.statSync(fullPath);
  } catch (e) {
    return false;
  }
  return true;
}

/** read front-matter from file, fail gracefully. */
function frontmatter(filename) {
  var filepath = path.join(config.lessonRoot, config.sourceFolder, filename);
  var m;
  try {
    m = matter.read(filepath);
  } catch (e) {
    return {};
  }
  return m.data;
}

module.exports = {
  isFile: isFile,
  frontmatter: frontmatter
}