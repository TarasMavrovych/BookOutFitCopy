import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDISHOST,
  port: Number(process.env.REDISPORT),
  username: process.env.REDISUSER || "default",
  password: process.env.REDISPASSWORD,
  tls: {} // Railway вимагає TLS, залишаємо
});

export default redis;
