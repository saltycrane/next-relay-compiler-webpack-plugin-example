# next-relay-compiler-webpack-plugin-example

Try to use https://github.com/danielholmes/relay-compiler-webpack-plugin with Next.js, but it doesn't work.

## Usage

- run the dev server
  ```
  $ npm install
  $ npm run dev
  ```

- make a change to the graphql query in `pages/index.js`
- expect the relay file in `pages/__generated__` to be updated, but it is not
