'use strict';

const Button = require('gpio-button');
const exec = require('child_process').exec;

const btn = new Button('button4');

btn.on('release', function () {
  console.log('Power button released. Powering off!');
  poweroff();
});

function poweroff() {
  exec('sudo systemctl poweroff', (err, stdout) => {
    if (err) {
      console.error(err);
    }
    console.log(stdout);
  });
}

