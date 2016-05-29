'use strict';

const Button = require('gpio-button');
const execFile = require('child_process').execFile;
const button4 = new Button('button4');

button4.on('press', function () {
  console.log('Power button pressed');
});

button4.on('hold', function () {
  //console.log('hold');
});

button4.on('release', function () {
  //console.log('release');
  console.log('Power button released. Executing shutdown script.');
  poweroff();
});

function poweroff() {
  execFile('./poweroff.sh', (err, stdout) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

