var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  var config = require('./config.json');
 
  var envConfig = config[env]; // s tem dobim samo tisti objekt, ki ustreza parametru
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  })
}