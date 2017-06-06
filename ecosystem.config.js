module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [

        // First application
        {
            name      : "ws_chat",
            script    : "bin/server.js",
            error_file: `${__dirname}/logs/wschat_logpm2.log`,
            out_file: `${__dirname}/logs/wschat_logoutpm2.log`,
            env: {
                COMMON_VARIABLE: "true"
            },
            env_production : {
                NODE_ENV: "development"
            }
        }
    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
// deploy : {
//   production : {
//     user : "node",
//     host : "212.83.163.1",
//     ref  : "origin/master",
//     repo : "git@github.com:repo.git",
//     path : "/var/www/production",
//     "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env production"
//   },
//     development : {
//     user : "node",
//     host : "212.83.163.1",
//     ref  : "origin/master",
//     repo : "https://github.com/Kiiotory/wschat.git",
//     path : "/home/wschat",
//     "post-deploy" : "npm install && pm2 startOrRestart ecosystem.config.js --env development",
//     env  : {
//       NODE_ENV: "dev"
//     }
//   }
// }
};
