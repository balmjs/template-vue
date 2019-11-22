/*eslint-env node*/

module.exports = [
  {
    input: 'index.html',
    output: 'views', // Replace 'views' to your remote project views path
    renameOptions: {
      basename: 'index',
      extname: '.php'
    }
  }
];
