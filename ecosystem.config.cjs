module.exports = {
  apps: [{
    name: "Midnight Game",
    script: "bun .",
    env_production: {
      NODE_ENV: "production"
    },
    env_development: {
      NODE_ENV: "development"
    }
  }]
}
