module.exports = {
  apps: [
    {
      name: "node-app",
      script: "src/server.js",
      instances: 1,
      exec_mode: "fork",
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};