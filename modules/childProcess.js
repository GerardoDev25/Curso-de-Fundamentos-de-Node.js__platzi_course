const { exec, spawn } = require('child_process');

// exec('node modules/errors.js', (err, stdout, stderr) => {
//   if (err) {
//     console.error(stderr);
//     return false;
//   }
//   console.log(stdout);
// });

let process1 = spawn('ls', ['-la']);

console.log(process1.pid);
console.log(process1.connected);
process1.stdout.on('data', function (dato) {
  console.log('is dead',process1.killed);
  console.log(dato.toString());
});

process1.on('exit', function () {
  console.log('the process finished');
});
