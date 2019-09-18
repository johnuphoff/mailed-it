const fs = require('fs');
const { Spinner } = require('cli-spinner');

const args = JSON.parse(process.env.npm_config_argv).original;
const templateName = args.length > 1 ? args[1] : null;
const templateType = 'fluid';

console.log('\n');

const spinner = new Spinner(`🎁 Creating new template file: './templates/${templateName}.js'`);
spinner.setSpinnerString('|/-\\');
spinner.start();

if (templateName === null) {
  console.log('\n| 🧐  You must specify the template name e.g. Marketing, Welcome, ForgotPassword\n');
  process.exit(0);
}

fs.writeFile(`./templates/${templateName}.js`, 'Hello content!', function (err) {
  if (err) throw err;
  spinner.stop();
});
