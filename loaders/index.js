const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanCSSPlugin = require('less-plugin-clean-css');

const flexBugs = require('postcss-flexbugs-fixes');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = ({ sourceMap = false, hmr = false, publicPath }) => ({
    cssExtractLoader: {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr,
            publicPath
        }
    },

    cssLoader: {
        loader: require.resolve('css-loader'),
        options: {
            sourceMap,
        }
    },

    postCssLoader: {
        loader: require.resolve('postcss-loader'),
        options: {
            postcssOptions:{
                plugins: [
                    flexBugs,
                    precss,
                    autoprefixer({
                        flexbox: 'no-2009'
                    })
                ]
            }
        }
    },

    lessLoader: {
        loader: 'less-loader',
        options: {
            javascriptEnabled: true,
            sourceMap: true,
            plugins: [
                new CleanCSSPlugin({ advanced: true })
            ]
        }
    }
});
