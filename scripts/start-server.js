const { execSync } = require('child_process');
execSync('cd /vercel/share/v0-project && npx serve -l 3000 . &', { stdio: 'inherit' });
