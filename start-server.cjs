#!/usr/bin/env node

console.log('Starting Vike server via wrapper...');

(async () => {
  try {
    // Dynamic import the Vike entry
    const { default: startServer } = await import('./dist/server/entry.mjs');
    
    // If the entry exports a function, call it (common in some Vike setups)
    if (typeof startServer === 'function') {
      await startServer();
    } else {
      console.log('Vike server started (entry.mjs did not export a default function)');
    }
    
    console.log('✅ Vike SSR server is running');
  } catch (err) {
    console.error('❌ Failed to start Vike server:', err.message);
    if (err.stack) console.error(err.stack);
    process.exit(1);
  }
})();
