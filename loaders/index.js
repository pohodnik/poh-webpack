const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ sourceMap = false }) => ({
    cssExtractLoader: {
        loader: MiniCssExtractPlugin.loader
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
            sourceMap
        }
    }
});
