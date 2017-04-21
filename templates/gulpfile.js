var balm = require('balm');
var config = require('./balmrc');

balm.config = {
  server: {
    open: true,
    proxyTable: config.proxyTable
  },
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts',
      img: 'images'
    }
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['last 2 versions']
  },
  scripts: {
    entry: config.entry,
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }],
    alias: {
      'vue': balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
    }
  },
  cache: true,
  assets: config.assets
};

balm.go(function(mix) {
  if (balm.config.production) {
    // for static
    mix.publish();
    // for html
    Object.keys(config.publish).forEach(function(key) {
      mix.publish(key, config.publish[key].target, config.publish[key].option || {});
    });
  }
});
