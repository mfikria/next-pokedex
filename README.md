## Next.js Pokémon API Project
This is a Next.js project that consumes the Pokémon API and displays information about different Pokémon using https://pokeapi.co/docs/v2
<img alt="image" src="https://user-images.githubusercontent.com/9253585/226161666-32938781-c21b-474e-bfc2-8e84f7e937f5.png">
<img alt="image" src="https://user-images.githubusercontent.com/9253585/226161689-e503d601-5eae-4df6-a119-25982ec1c47d.png">

## Getting Started
To get started with this project, you can either clone this repository or create a new Next.js project from scratch and copy the necessary files.

## Prerequisites
To run this project, you need to have Node.js and npm (or yarn) installed on your machine.

### Installing
Clone this repository

```bash
git clone https://github.com/mfikria/next-pokedex.git
```

### Install dependencies

```bash
cd next-pokedex
yarn
```

### Run the development server

```bash
yarn dev
```

### Build Production build
```bash
yarn build
```

### Start Production build
```bash
yarn start
```

## Testing

### Unit Test
To run Jest tests, use the command `npm test` in your terminal or command prompt. This will run all test cases in the `*.test.ts` files.

```bash
yarn test
```

### E2E
To run Playwright tests, use the command in your terminal or command prompt. This will run all test cases in the `e2e` directory.

```bash
npx playwright install
yarn test:e2e
```

Open http://localhost:3000 in your browser to see the application running.

## Project Structure
Here's a brief description of the files and directories:

- src: This is the root directory for the source code.
  - components: This directory contains reusable UI components organized into subdirectories by category, such as atoms, molecules, and organisms.
    - atoms: Contains small, single-purpose components like badges, cards, and typography.
    - molecules: Contains more complex components made up of smaller components, such as the PokemonCard.
    - organism: Contains larger, more complex components that represent full sections of the UI, like the PokemonDetail and PokemonGrid.
  - svg: Contains SVG images used throughout the app, such as the back.svg and pokemon-logo.svg.
  - hooks: Contains custom React hooks used in the app, such as usePokeApi and useScrollToEnd.
  - mocks: Contains mock data used in tests, such as the pokemon.json file.
  - pages: Contains the pages of the app that are rendered on the server, including dynamic routes like /pokemon/[id]. The files in this directory have a special role in Next.js and must be named correctly to function properly.
  - services: Contains modules that interact with external services or APIs, such as the PokeApi module that communicates with the PokeAPI.
  - styles: Contains global styles used throughout the app, such as the GlobalStyles module.
  - utils: Contains utility modules, such as the colors module for defining the app's color scheme.
  - e2e: End to end test folder

## Technology
- Next.js is a React framework used for server-side rendering, static site generation, and building modern web applications.
- Storybook is a UI development environment that enables developers to isolate, develop, and showcase UI components in an interactive way. - Emotion is a CSS-in-JS library that allows developers to write CSS styles within JavaScript code.
- Twin.macro is a library that extends the CSS syntax with the ability to use CSS-in-JS features.
- Jest is a JavaScript testing framework that is used for unit testing, integration testing, and snapshot testing. It is known for its simplicity, speed, and ease of use.
- Playwright is a browser automation library that allows developers to automate web applications in different browsers, such as Chrome, Firefox, and Safari. It provides a high-level API that is easy to use and can be integrated with testing frameworks like Jest.

## Author
M Fikri A - [GitHub Profile](https://github.com.mfikria)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
