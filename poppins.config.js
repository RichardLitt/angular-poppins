module.exports = function (poppins) {
  poppins.theUsualPlease();

  poppins.config = {
    // Github repo to watch
    // https://github.com/myname/myrepo
    target: {
      user: 'angular',
      repo: 'angular.js'
    },

    // Credentials for user who leaves comments, etc.
    // You may want to load these from a seperate file like `config-credentials.js`, and
    // add this file to your `.gitignore` list
    login: require('./credentials'),

    // port for poppins to listen on and URL for Github to ping
    hook: {
      url: 'http://example.com:1234',
      port: 1234
    }
  };

};
