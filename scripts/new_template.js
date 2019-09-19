const fs = require('fs');

const validArgs = (function getValidArguments() {

  const args = JSON.parse(process.env.npm_config_argv).original;
  let templateType;
  let templateName;

  args.forEach(function iterateOverArguments(arg) {
    const cleanArg = arg.replace(' ', '').replace('"', '');
    const nameRegExp = /^--name=(.*)/;
    const typeRegExp = /^--type=(.*)/;

    if (nameRegExp.test(cleanArg)) {
      [,templateName] = cleanArg.match(nameRegExp);
    }

    if (typeRegExp.test(cleanArg)) {
      [,templateType] = cleanArg.match(typeRegExp);
    }
  });

  return {
    templateName,
    templateType
  }

})();

const { templateName, templateType = 'fluid' } = validArgs;

if (!templateName) {
  console.log('\n| 🧐  You must specify a template name. e.g. template:create --name=MailedIt\n');
  process.exit(0);
}

const validTypes = ['fluid', 'responsive', 'hybrid'];
const formattedTemplateType = templateType.toLowerCase();

if (!validTypes.includes(formattedTemplateType)) {
  console.log(`\n| 🧐  Invalid type "${templateType}". Type must be one of ${validTypes.join(', ')}.`);
  process.exit(0);
}

const templateFileContents = fs.readFileSync(`./lib/${formattedTemplateType}_template.js`, 'utf8');
const newTemplate = templateFileContents.replace(new RegExp('TEMPLATE_NAME', 'g'), templateName);

fs.writeFile(`./templates/${templateName}.js`, newTemplate, function (err) {
  if (err) throw err;
});

console.log(`🎁 Created new ${formattedTemplateType} template: './templates/${templateName}.js'`);
