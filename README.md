Derived from the excellent work of [@fivdi's gpio-button](https://github.com/fivdi/gpio-button). Read the readme there to set up device tree overlay in order to get this package working.

# Installation
- clone repo
- `npm i`

## Start on boot

Find the location of the node binary

    npm prefix --global


Open *pi-powerbutton.service* and update the paths in the unit file

Link the systemd unit file

    ln ./pi-powerbutton.service /etc/systemd/system/

Attempt to start the service

    sudo systemctl start pi-powerbutton.service

Enable service

    sudo systemctl enable pi-powerbutton.service

Try to push the button

    <kbd>O</kbd>
