# Easy Configuration

Install ezconf by typing `node install --save ezconf`.

Create a config directory in the root of your project

```
project/
  config/
    production-config.js
    development-config.js
    test-config.js
  node_modules/
  	ezconf/
  index.js
  package.json
```

If you want, add a line `/config/` to your gitignore to ignore the config folder.

> production-config.js

```javascript
module.exprots = {
	USERNAME: 'prodadmin',
	PASSWORD: 'pav7ZuTr'
}
```



> development-config.js

```javascript
module.exports = {
  USERNAME: 'devadmin',
  PASSWORD: 'supersafe'
};
```



> index.js

```javascript
var config = require('ezconf');

console.log(config.USERNAME);
```



If you now execute `node index.js` it will print `devadmin`.

If you set NODE_ENV to production by executing the following `NODE_ENV=production node index.js` it will print `prodadmin`.

In other words, ezconf determines the right config file by looking at process.NODE_ENV. If NODE_ENV is not `production` or `test` it defaults to `development`.