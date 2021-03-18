# Wedding Organizer Project
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

The project includes:
- [Ngrx](https://ngrx.io/guide/store)
- [D3](https://d3js.org/)
- [Angular Material](https://material.angular.io/)
- [Jest](https://jestjs.io/docs/getting-started)

This project is the proof of concept for a wedding planner organizer. It uses Angular Material for the component library and theme for the panels and inputs of the reactive forms used in the `Add a Guest` feature. After submitting the form, the data is then saved to the store for state management. Navigating to the `Guest List` feature, the data is pulled from the store to populate both the guest list table and the D3 bar chart.

> This project is on GitHub Pages. Find it at the following link:
https://emilyk568.github.io
___
___
## Getting Started
To run this project you will need the following:
- Node.js 
  - Download [here](https://nodejs.org/en/about/releases/)
- Npm package manager
  - Should be installed with Node.js by default
  - To verify you have it installed, run `npm -v` in the terminal
- The Angular CLI
  - Run the command `npm install -g @angular/cli` in the terminal

___
## Running the Application
1. Clone the repo into VSCode (or IDE of your choice)
2. Verify you have the code and are in the main branch
3. Run `npm i` to install all needed dependencies
4. Run `ng serve` to start up the dev server
5. Navigate to `http://localhost:4200/`

___
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/docs/getting-started). This project also utilizes [ng-bullet](https://www.npmjs.com/package/ng-bullet) to increase test efficiency.

## Running end-to-end tests

Currently, this project does not include any end-to-end tests. Future steps include adding Cypress for automation testing.
___
## Further Help with Angular

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
___
___
## Future Steps for this Project
- Adding Cypress for automation testing
- Add automatic automation testing after deployment
- Mobile responsiveness for all pages
- Addition of login and authentication
- On the `Add a Guest` feature, the chips component of friends would be upgraded to utilizes a switchmap for an autocomplete that gives the options of friends already in the state
- On the `Guest List` feature, another D3 chart would be added to show the relationship of who is tied to who based on friends
- Add a feature to keep track of the reception meal and who is requesting what
- Add a feature to keep track of gifts received from guests and whether a thank you note has been sent

