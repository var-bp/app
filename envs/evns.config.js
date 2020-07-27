const fs = require('fs');

const envFileContent = require(`../envs/${process.env.NODE_ENV}.json`);

fs.writeFileSync('env.json', JSON.stringify(envFileContent, null, 2));
