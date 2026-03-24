module.exports = {
  apps: [
    {
      name: 'taifa-website',
      script: 'build/server/entry.mjs',
      cwd: '/var/www/website',
      interpreter: 'node',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '300M',
      autorestart: true
    }
  ]
};
