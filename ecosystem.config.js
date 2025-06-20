module.exports = {
  apps: [{
    name: "login-test-sentinel",
    script: "app.js",
    instances: "max",
    autorestart: true,
    watch: false,
    max_memory_restart: "1G",
    env: {
      PORT: 5000,
      MONGO_URI: 'mongodb://root:root@localhost:27017/loginDb?authSource=admin&directConnection=true',
      JWT_SECRET:'your_jwt_secret_key',
      JWT_EXPIRE: '30d'


    }
  }]
}