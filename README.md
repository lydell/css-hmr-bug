# webpack CSS HMR bug

1. `npm install`
2. `npm start`
3. Visit http://localhost:8080/
4. Open index.css and change the background-color

Expected: The CSS is hot reloaded.

Actual: The whole page is reloaded.

See index.css for further comments.

Disable css-modules in webpack.config.js to see how well CSS HMR works when
css-modules is disabled.

Check out the [fix](https://github.com/lydell/css-hmr-bug/tree/fix) branch for a
fix!
