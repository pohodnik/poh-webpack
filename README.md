# webpack-config
Pohodnik webpack configuration for frontend build

## install
```shell script
yarn add -D @pohodnik/webpack-config
```

## usage
In root of your project file `webpack.config.js`
```javascript
const { createConfig } = require('@pohodnik/webpack-config');

module.exports = createConfig({
    // local webpack config extends @pohodnik/webpack-config
});
```
or

```javascript
const { createConfig } = require('@pohodnik/webpack-config');

module.exports = createConfig(argv => {
    if (argv.mode === 'production') {
        return {
            // ...
        }
    }
});
```
