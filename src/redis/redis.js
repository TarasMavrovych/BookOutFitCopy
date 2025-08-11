import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDISHOST,
  port: process.env.REDISPORT,
  username: process.env.REDISUSER,
  password: process.env.REDISPASSWORD,
  tls: {} // залишай, якщо Railway вимагає TLS
});

export default redis;
