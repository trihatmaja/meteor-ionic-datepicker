Package.describe({
  name: 'netanelgilad:ionic-datepicker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'ionic datepicker',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/netanelgilad/meteor-ionic-datepicker',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('driftyco:ionic@1.0.0-rc.1', 'client');
  api.use('angular:angular@1.3.15_1', 'client');

  api.addFiles([
    'templates.js',
    'ionic-datepicker.js',
    'style.css'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:ionic-datepicker');
  api.addFiles('ionic-datepicker-tests.js');
});
