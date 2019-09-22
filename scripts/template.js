const fs = require('fs-extra');
const { writeToFile, validAruments, defaultExports, unlink } = require('./utils');

const { original: args } = JSON.parse(process.env.npm_config_argv);
const { command, templateName: name, templateType = 'fluid' } = validAruments(args);
const type = templateType.toLowerCase();
const validTypes = ['fluid', 'responsive', 'hybrid'];

const buildPath = './src/templates';
const template = fs.readFileSync(`./lib/${type}_template.txt`, 'utf8');
const content = template.replace(new RegExp('TEMPLATE_NAME', 'g'), name);

function validateName() {
  if (!name) {
    console.log('\n| 🧐  You must specify a template name. e.g. template:create --name=MailedIt\n');
    process.exit(0);
  }
}

function validateType() {
  if (!validTypes.includes(type)) {
    console.log(
      `\n| 🧐  Invalid type "${templateType}". Type must be one of ${validTypes.join(', ')}.`
    );
    process.exit(0);
  }
}

const createTemplate = async () => {
  validateName();
  validateType();

  await writeToFile(`${buildPath}/${name}.js`, content);
  const exports = await defaultExports(buildPath);
  await writeToFile(`${buildPath}/index.js`, exports);

  console.log(`🎁 Created new ${type} template: '${name}.js'`);
};

const deleteTemplate = async () => {
  validateName();

  await unlink(`${buildPath}/${name}.js`).catch(() => {});
  const exports = await defaultExports(buildPath);
  await writeToFile(`${buildPath}/index.js`, exports);

  console.log(`🎁 Deleted template: '${name}.js'`);
};

function buildTemplates() {}

switch (command) {
  case 'create':
    createTemplate();
    break;
  case 'delete':
    deleteTemplate();
    break;
  case 'build':
    buildTemplates();
    break;
  default:
    console.log(`\n| 🧐 Unknown command ${command} - must be one of create, delete \n`);
}
