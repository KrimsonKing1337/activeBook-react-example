const { fork } = require('child_process');

try {
  const args = process.argv.slice(2);

  fork(`./node_modules/activeBook-core/scripts/addOrRemovePages/addOrRemovePages.js`, args);
} catch (e) {
  console.error(e.stdout.toString());
}
