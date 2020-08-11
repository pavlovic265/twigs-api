/* eslint-disable */
module.exports = {
  apps : [{
    name: 'api',
    script: './src/index.ts',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      NODE_PATH: './src'
    },
  }],

};
