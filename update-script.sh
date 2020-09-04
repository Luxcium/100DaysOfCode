#!/bin/sh
fnm install latest &
fnm install latest-argon &
fnm install latest-boron &
fnm install latest-carbon &
fnm install latest-dubnium &
fnm install latest-erbium &
fnm install latest-v10.x &
fnm install latest-v11.x &
fnm install latest-v12.x &
fnm install latest-v13.x &
fnm install latest-v14.x &
fnm install npm &
fnm install patch &
npm i -g yarn@latest npm@latest ts-node@latest typescript@latest prettier@latest
yarn global add yarn@latest npm@latest ts-node@latest typescript@next prettier@latest
exit
