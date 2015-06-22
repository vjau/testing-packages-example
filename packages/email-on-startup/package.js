Package.describe({
  name: 'email-on-startup',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "sinon": "1.14.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('coffeescript');
  api.use('meteor-platform');
  api.use('fake-email');
  api.export('EmailOnStartup', ['server'], {testOnly: true});
  api.addFiles('email-on-startup.coffee');
});

Package.onTest(function(api) {
  api.use('coffeescript');
  api.use('tinytest');
  api.use('fake-email');
  api.use('email-on-startup');
  api.addFiles('email-on-startup-tests.coffee', ['server']);
  // api.addFiles('email-on-startup-tests.js', ['server']);
});
