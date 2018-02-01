var path = require('path');

module.exports = {
    entry: path.resolve(__dirname+'/src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'app.js'
    },
    module: {
    	loaders: [
    	  {
    	  	test: /\.jsx?$/,
           exclude: /node_modules/, 
          loader: "babel-loader", 
    query:
      {
        presets:['react']
      }
    	  },
    	  {
    	  	test: /\.less$/,
    	  	loader: 'style!css!less?strictMath&noIeCompat'
    	  },
        {
          test: /\.png$/,
          loader: "url-loader",
          query: { mimetype: "image/png" }
        },
        { test: /\.css$/,
          loader: 'style-loader!css-loader' },

    	]
    }
};
