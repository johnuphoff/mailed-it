# 💅 Mailed It! 
## A Modern Approach to Email Templating

![Alt Text](https://github.com/johnuphoff/mailed-it/raw/master/public/images/so-good.gif)

Creating a new template:
```
yarn template:create --name=Welcome --type=fluid
```
This command will create a stub for the welcome template in `./src/templates/Welcome.js`.  
This is the template you use to build your email.

We recommend using the cli to generate and remove templates. If you want to generate your own template, create a new javascript file in `./src/templates`, then update the `./src/templates/index.js` exports file with your new template name using the following format:

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
When developing in the browser, we add `<tbody>` tags to remove react warnings.  
These will not appear in the production build (you don't want them).

To build production templates:
```
yarn template:build
```

Production templates will appear in `./build` and will follow the naming convention of the javscript template file.
In the example above, `./templates/Welcome.js` is output to `./build/welcome.html`.

## Help Wanted / TODO
- Add juice config file to support different inlining behaviors
- Improve command line interface
- Write tests
- Add Hybrid and Responsive layouts
- Add examples for each layout
- Improve documentation





