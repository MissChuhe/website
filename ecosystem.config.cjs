module.exports = {
  apps: [
    {
      name: 'taifa-website',
      script: '/var/www/website/start-server.cjs',
      cwd: '/var/www/website',
      interpreter: 'node',
      watch: false,
      exec_mode: 'fork',
      instances: 1,
      max_memory_restart: '300M',
      autorestart: true,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        VITE_TURNSTILE_SITE_KEY: '0x4AAAAAACu74ponLFqyjsUs',
        TURNSTILE_SECRET_KEY: '0x4AAAAAACu74pWYYvNsP4FL4wQO3Yvgc8Q',
        VITE_TURNSTILE_BYPASS_LOCAL: 'false'
      }
    }
  ]
};
