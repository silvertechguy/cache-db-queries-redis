const redisClient = require("./config/redis");

const getPostFromCache = (id) => {
  return new Promise((resolve, reject) => {
    redisClient.hgetall(id, (_, value) => {
      if (value === null) return resolve(null);
      if (value !== null) return resolve(value);
    });
  });
};

const setPostFromCache = (id, post) => {
  redisClient.hmset(id, post);
  redisClient.expire(id, 60 * 60);
};

module.exports = { getPostFromCache, setPostFromCache };
