# ReactFrontends

The following projects are included with this monorepo.

- Cure v3
  > NMB Cure is a ticket management system focused on tracking customer issues raised in all our branches. It handles features such as:- <br />
  > - CTI Management
  > - Ticket Management
  >   * Create a ticket
  >   * Close a ticket
  >   * Forward a ticket to other branch
  >   * Forward a ticket to third party (mostly departments)
  > - Escalation
  > - Administrative tasks
  >   * Department management
  >   * Branch and zones management
  >   * User management
  >   * Customer details management

- NMP
  > This is the master portal which will enable users to login once and access systems they are permitted to (without furthure login). Features include:- <br />
  > - Single sign on and sign out
  > - View list of portals a user can access
  > - If user tries to login into a specific portal and has no session, NMP redirects that user to the appropriate portal after user logs in

- Mkononi Portal
  > This is the administrative portal for NMB Mkononi. The following are the feature included:- <br />
  > - Customer profile management
  >   * Block / Unblock customer account
  >   * PIN reset
  >   * View customer transactions
  >   * View customer preferences
  > - USSD menu configuration
  > - Notification management
  > - USSD configuration messages management
  > - Audit logs

# How to use this monorepo
  1. Create a new app by running `nx generate @nrwl/react:application <application name>`.
  2. Run `nx workspace-generator project-boilerplate <application name>` to apply application scaffolding to your project.
  3. Run `nx workspace-generator feature-scaffolding` to apply feature scaffolding.

## TODO
  1. Create generator for empty feature scaffolding with the same specs as above
     - Create a feature folder in app/module/[feature-name] with the following contents
            <ol style="list-style-type:lower-roman;">
               <li>components folder with index.tsx file</li>
               <li>db folder with index.tsx file</li>
               <li>lib folder with index.tsx file</li>
               <li>pages folder with index.tsx and add_update.tsx files</li>
               <li>routes folder with index.tsx file</li>
               <li>services folder with index.tsx file and [feature_service].tsx file</li>
               <li>slices folder with index.tsx file and [feature_slice].tsx file</li>
               <li>types folder with index.tsx file and [feature_types].tsx file</li>
             </ol>
       - Update app/store/index.tsx file to include the newly created reducers
       - Update the app/entry-point/app.tsx file to include the newly created routes
       - Update the app/modules/common/configs/frontend.tsx file to include the frontend url for the new feature
         - Frontend url could have multiple parents, could be a parent or could be free
       - Update the app/modules/common/configs/baseUrl.tsx file to include the backend urls for the new feature
         - Backend url could have multiple parents or could create multiple parents
       - Update the app/modules/common/configs/menu.tsx file to include the menu title for the new feature
         - Menu could have a parent or could be a parent or could be free
     2. Create a generator for automating deployment with the following specs
        - Specify whether it is major version, minor version or fix
        - Increment the application version depending on whether it is major, minor or fix
        - Build the application
        - Build the docker application
        - Push the docker build
    3. Extend main package.json to generated project package.json

This project was generated using [Nx](https://nx.dev) workspace and [React](https://reactjs.org/) library.

## Adding capabilities to your workspace with NX

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Core React plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@react-frontends/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Create new component

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Create component stories

Run `nx g @nrwl/react:component-story --project=project-name --componentPath=path-from-lib` to generate a story for component.

## Run project stories

Run `nx run project-name:storybook` to run project stories.

## Create helper functions

Navigate to the respective version such as v2, then create a helper function under helpers/stc/lib following the current conventions

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

