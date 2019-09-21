const fs = require('fs-extra');
const { promisify } = require('util');

const readFilesAsync = promisify(fs.readdir);
const writeFileAsync = promisify(fs.outputFile);

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
 * Delete file at path
 * @param {string} path
 */
const unlink = path => {
  fs.removeSync(path);
};

/**
 * Return an object of valid arguments passed to cli
 * @param {array} args
 */
const validAruments = args => {
  let templateType;
  let templateName;

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

  // Build import strings
  let imported = '';

  files.forEach(function(file) {
    const f = file.replace('.js', '');
    imported += `import ${f} from './${f}';\n`;
  });

  // Build export strings
  let exported = 'export default { ';

  files.forEach(function(file) {
    const f = file.replace('.js', '');
    exported += `${f}, `;
  });

  exported = exported.substring(0, exported.length - 2);
  exported += ' };';

  return `${imported}\n${exported}`;
};

module.exports = { getFiles, writeToFile, validAruments, unlink, defaultExports };
