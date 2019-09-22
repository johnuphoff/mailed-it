const fs = require('fs-extra');
const { promisify } = require('util');

const readFilesAsync = promisify(fs.readdir);
const writeFileAsync = promisify(fs.outputFile);

const unlink = async path => {
  await fs.unlink(path);
};
/**
 * Saves generatd template file to disk
 * @param {string} filePath
 * @param {string} fileContents
 * @param {string} fileType
 */
const writeToFile = async (filePath, fileContents) => {
  await writeFileAsync(filePath, fileContents);
};

/**
 * Returns an array of files at the given path
 * @param {string} path
 */
const getFiles = async path => {
  const files = await readFilesAsync(path);
  return files;
};

/**
 * Return an object of valid arguments passed to cli
 * @param {array} args
 */
const validAruments = args => {
  let templateType;
  let templateName;

  if (args.length === 0) {
    console.log(
      'Unknown command - must be one of template:create, template:delete. e.g. template:create'
    );
    process.exit(0);
  }

  const [, command] = args[0].split(':').map(el => el.toLowerCase());

  args.forEach(function iterateOverArguments(arg) {
    const cleanArg = arg.replace(' ', '').replace('"', '');
    const nameRegExp = /^--name=(.*)/;
    const typeRegExp = /^--type=(.*)/;

    if (nameRegExp.test(cleanArg)) {
      [, templateName] = cleanArg.match(nameRegExp);
    }

    if (typeRegExp.test(cleanArg)) {
      [, templateType] = cleanArg.match(typeRegExp);
    }
  });

  return {
    command,
    templateName,
    templateType
  };
};

/**
 * Create index.js default exports for all files in path
 * @param {string} path
 */
const defaultExports = async path => {
  const files = await getFiles(path);

  if (files.length === 1 && files[0] === 'index.js') {
    fs.unlink(`${path}/index.js`);
    return '';
  }
  // Build import strings
  let imported = '';

  files.forEach(function(file) {
    if (file !== 'index.js') {
      const f = file.replace('.js', '');
      imported += `import ${f} from './${f}';\n`;
    }
  });

  // Build export strings
  let exported = 'export default { ';

  files.forEach(function(file) {
    if (file !== 'index.js') {
      const f = file.replace('.js', '');
      exported += `${f}, `;
    }
  });

  exported = exported.substring(0, exported.length - 2);
  exported += ' };';

  return `${imported}\n${exported}`;
};

module.exports = { getFiles, writeToFile, validAruments, defaultExports, unlink };
