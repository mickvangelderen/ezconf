var configFilePath = ({
	'test': '../../../config/test-config.js',
	'production': '../../../config/production-config.js'
})[process.env.NODE_ENV] || '../../../config/development-config.js';

module.exports = require(configFilePath);