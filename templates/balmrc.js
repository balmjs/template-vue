module.exports = {
  proxyTable: {
    '/api': {
      target: 'http://your.project.dev',
      changeOrigin: true
    }
  },
  entry: {
    main: './app/scripts/main.js' // entry js file
  },
  assets: {
    root: 'assets', // replace 'assets' to your remote project root
    publicPath: 'public'
  },
  publish: {
    'index.html': {
      target: 'views', // replace 'views' to your remote project views path
      option: {
        basename: 'index',
        extname: '.php'
      }
    }
  }
};
