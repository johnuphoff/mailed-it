# 💅 Mailed It! 
## A Modern Approach to Email Templating

Creating a new template:
```
yarn template:create --name=Welcome --type=fluid
```
This command will create a stub for the welcome template in `./templates/Welcome.js`.  We recommend React casing templates to follow react component naming conventions.

To develop:
```
yarn start
```
Note that when developing in the browser, we add `<tbody>` tags to remove react warnings.  
These will not appear in the production build (you don't want them).

To build production templates:
```
yarn build
```

Production templates will appear in `./dist` and will follow the naming convention of the javscript template file.
In the example above, `./templates/Homs.js` will be bundled to `./dist/welcome.html`.

To run litmus tests:
```
yarn test
```

To test litmus, you must have a litmus account setup and you must edit the litmus.config with the appropriate values.





