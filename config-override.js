const { buffer } = require('stream/consumers');
const webpack = require('webpack');

module.exports = function override(config, env){
    config.plugins.push = (
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        })
    );
    
    return config
}