'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false
    }
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('node_modules/ember-cli-data-export-with-style/vendor/Blob.js');
  app.import('node_modules/ember-cli-data-export-with-style/vendor/FileSaver-1.3.3.js');
  app.import('node_modules/ember-cli-data-export-with-style/vendor/jszip-0.10.8.js');
  app.import('node_modules/ember-cli-data-export-with-style/vendor/xlsx.core.min.js');

  return app.toTree();
};
