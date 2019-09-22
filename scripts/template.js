import { ServerStyleSheet } from 'styled-components';

const fs = require('fs-extra');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const { getFiles, writeToFile, validAruments, defaultExports, unlink } = require('./utils');

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

const buildTemplates = async () => {
  const files = await getFiles(buildPath);

  files.forEach(async file => {
    if (file !== 'index.js') {
      // eslint-disable-next-line global-require
      const { default: Component } = require('../src/templates/Welcome.js');

      const sheet = new ServerStyleSheet();
      const innerHTML = renderToStaticMarkup(sheet.collectStyles(<Component />));
      const styleTags = sheet.getStyleTags();
      const outerHTML = fs.readFileSync('./public/index.html', 'utf8');
      const combinedHTML = outerHTML
        .replace('<center id="root">', `<center>${innerHTML}`)
        .replace('</head>', `${styleTags}</head>`);

      await writeToFile(`./build/${file.replace('.js', '').toLowerCase()}.html`, combinedHTML);
    }
  });
};

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
    break;
}
