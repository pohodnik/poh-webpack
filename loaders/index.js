const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ sourceMap = false, hmr = false }) => ({
    cssExtractLoader: {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr
        }
    },

    cssLoader: {
        loader: require.resolve('css-loader'),
        options: {
            sourceMap
        }
    },

    postCssLoader: {
        loader: require.resolve('postcss-loader'),
        options: {
            sourceMap
        }
    },

    lessLoader: {
        loader: require.resolve('less-loader'),
        options: {
            javascriptEnabled: true,
            sourceMap
        }
    }
});
