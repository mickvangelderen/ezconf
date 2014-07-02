# Easy Configuration

Create a config directory in the root of your project

```
project/
  config/
    production-config.js
    development-config.js
    test-config.js
  node_modules/
  lib/
  index.js
```

If you want, add a line `/config/` to your gitignore to ignore the config folder.

*development-config.js*
```javascript
module.exports = {
  USERNAME: 'devadmin',
  PASSWORD: 'supersafe'
};
```

*index.js*
```javascript
var config = require('ezconf');

console.log(config.USERNAME);
```

ezconf determines the right config file by looking at process.NODE_ENV. If NODE_ENV is not `test` or `production` it defaults to `development`.
