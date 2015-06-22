Package.describe({
  name: 'startup-runner',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('startup-runner.js');
  api.export('StartupRunner');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('startup-runner');
  api.addFiles('startup-runner-tests.js');
});
