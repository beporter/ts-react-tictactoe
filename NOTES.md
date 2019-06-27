# Project Notes

This document exists to track minutia and [administrivia](https://www.merriam-webster.com/dictionary/administrivia) related to this project, including raw bootstrapping steps to start from zero on a new machine without node or npm.


## Assumptions

* You're working on a semi-recent Mac.
* You have the **Xcode Command Line Tools** installed.
* You have `git` and a package manager like [MacPorts](https://www.macports.org/) or [Homebrew](https://docs.brew.sh/Installation) installed.


## Bootstrapping

These are the steps involved in getting the projected kicked off. When this has been done once for the project, it won't need to be done again until the next project.

* Install Node.js and NPM (or install [directly](https://nodejs.org/en/download))): `sudo port install nodejs6 npm6`
* Confirm versions in Terminal: `node -v && npm -v`
    * If these are "old" (latest stable version can be checked [on the download page](https://nodejs.org/en/download/)), update them as needed per your package manager's instructions or [directly](https://npme.npmjs.com/docs/cli/updating.html): `sudo port selfupdate && sudo port upgrade -vuc nodejs12`
* Install `create-react-app`: `sudo npm install -g create-react-app`
* Create the project:
    * Switch to the dir where you keep your project folders: `cd ~/Projects` (:warning: example)
    * Init the project: `npx create-react-app tr-react-tictactoe --typescript && cd tr-react-tictactoe`
    * Update the `package.json` file: `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
    * Init the git repo:
        * `git init`
        * `git remote add origin git@github.com:beporter/ts-react-tictactoe.git`
        * `git commit -a -m 'Initial create-react-app import.'
        * `git push origin master`

    * Clone this repo: `git clone  && cd ts-react-tictactoe`


## Reference Material

A list of the resources used during this project (all sure to change and become out of date).

* [React & Typescript](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) from TypescriptLang.org.
* [Microsoft's Typescript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) on Github (already deprecated at the time of this writing.)
* [React + Typescript Cheatsheets list](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets) from the Typescript Cheatsheets Github repo.
* [The Database](https://github.com/ssunday/the_database) - A react+ts project by [@ssunday](https://github.com/ssunday) for reference.
* [Create React App getting started](https://facebook.github.io/create-react-app/docs/getting-started) guide from Facebook.
