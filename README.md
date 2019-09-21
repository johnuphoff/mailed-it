# 💅 Mailed It! 
## A Modern Approach to Email Templating

![Alt Text](https://github.com/johnuphoff/mailed-it/raw/master/public/images/so-good.gif)

Creating a new template:
```
yarn template:create --name=Welcome --type=fluid
```
This command will create a stub for the welcome template in `./src/templates/Welcome.js`.  We recommend React casing templates to follow react component naming conventions.  This is the template you use to build your email. The project comes with one pre-generated template named "Welcome.js".  

We recommend using the cli to generate and remove templates. If you want to generate your own template, create a new javascript file in `./src/templates`, then update the `./src/templates/index.js` exports file with your new template name in the following format:

```
import Welcome from './Welcome';
import SomethingElse from './SomethingElse';

export default { Welcome, SomethingElse };
```

In development, routes are created with slugs that match component names e.g. Home.js can be viewed at /home.

To develop:
```
yarn start
```
Note that when developing in the browser, we add `<tbody>` tags to remove react warnings.  
These will not appear in the production build (you don't want them).

*** Under Construction ***
To build production templates:
```
yarn build
```

Production templates will appear in `./build` and will follow the naming convention of the javscript template file.
In the example above, `./templates/Homs.js` will be bundled to `./dist/home.html`.







