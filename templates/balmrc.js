module.exports = {
  proxyTable: {
    '/api': {
      target: 'http://your.project.dev',
      changeOrigin: true
    }
  },
  entry: {
    main: './app/scripts/main.js' // Entry js file
  },
  assets: {
    root: 'assets', // Replace 'assets' to your remote project root
    publicPath: 'public'
  },
  publish: {
    'index.html': {
      target: 'views', // Replace 'views' to your remote project views path
      option: {
        basename: 'index',
        extname: '.php'
      }
    }
  }
};
