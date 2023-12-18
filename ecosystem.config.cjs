module.exports = {
  apps: [{
    name: "Midnight Game",
    script: "bun .",
    restart_delay: 3000,
    env_production: {
      NODE_ENV: "production"
    },
    env_development: {
      NODE_ENV: "development"
    }
  }]
}
