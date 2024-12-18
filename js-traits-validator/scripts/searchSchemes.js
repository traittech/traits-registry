const fs = require('fs').promises;
const path = require('path');

const source = '../../traits';
const jsonFileName = 'trait.json';
const result = {}

const putToRegistry = (filepath, result) => {
  const path = filepath.substring(source.length + 1, filepath.length - jsonFileName.length - 1).split('/').join('.')
  const data = require(filepath);
  result[path] = data;
}

const searchSchemes = async (dir, filelist = []) => {
  const files = await fs.readdir(dir);

  for (file of files) {
    const filepath = path.join(dir, file);
    const stat = await fs.stat(filepath);

    if (stat.isDirectory()) {
      filelist = await searchSchemes(filepath, filelist);
    } else {
      if (file === jsonFileName) {
        putToRegistry(filepath, result)
        filelist.push(`${filepath}`);
      }
    }
  }

  return filelist;
}


searchSchemes(source)
  .then(() => fs.writeFile('../schemes/registry.json', JSON.stringify(result, null, 3), 'utf8', () => console.log('done')))
  .catch((e) => console.log('error', e))