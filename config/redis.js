let config;

if (process.env.NODE_ENV === "development") {
  config = null;
} else if (process.env.NODE_ENV === "production") {
  config = process.env.REDIS_URL;
}

module.exports = require("redis").createClient(config);
