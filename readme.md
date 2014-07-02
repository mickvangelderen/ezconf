# Easy Configuration

Install ezconf by typing `npm install --save ezconf`.



## Setup

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



## Usage

Using ezconf is very simple, you just `require('ezconf')` as shown below.

> index.js

```javascript
var config = require('ezconf');

console.log(config.USERNAME);
```

Just execute your application like so

```bash
$ node index.js
devadmin
```

Set the environment variable to *production*, *test* or *development* to select the right configuration

```bash
$ NODE_ENV=production
prodadmin
```