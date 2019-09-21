const fs = require('fs');
const { writeToFile, validAruments, unlink, defaultExports } = require('./utils');

const { original: args } = JSON.parse(process.env.npm_config_argv);
const { templateName: name, templateType = 'fluid' } = validAruments(args);
const type = templateType.toLowerCase();
const validTypes = ['fluid', 'responsive', 'hybrid'];

if (!name) {
  console.log('\n| 🧐  You must specify a template name. e.g. template:create --name=MailedIt\n');
  process.exit(0);
}

if (!validTypes.includes(type)) {
  console.log(
    `\n| 🧐  Invalid type "${templateType}". Type must be one of ${validTypes.join(', ')}.`
  );
  process.exit(0);
}

const buildPath = './src/templates';
const template = fs.readFileSync(`./lib/${type}_template.txt`, 'utf8');
const content = template.replace(new RegExp('TEMPLATE_NAME', 'g'), name);

// TODO refactor tasks, handle errors
(async function() {
  // write template file to build directory
  await writeToFile(`${buildPath}/${name}.js`, content);
  // sync delete exports module
  unlink(`${buildPath}/index.js`);
  // get a list of all files currently in build directory
  const exports = await defaultExports(buildPath);
  // wrtie exports
  await writeToFile(`${buildPath}/index.js`, exports);

  console.log(`🎁 Created new ${type} template: '${name}.js'`);
})();
