Package.describe({
  name: 'timoruetten:flow-router-ssr-i18n',
  version: '0.0.6',
  summary: 'Simple solution for i18n prefixes in FlowRouter SSR routes.',
  git: 'https://github.com/TimoRuetten/meteor-flow-router-ssr-i18n',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.use('tracker');
  api.use('underscore');
  api.use('session');
  api.use('kadira:flow-router-ssr@3.13.0');
  api.use('tap:i18n@1.8.0');
  api.mainModule('flow-router-i18n.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('timoruetten:flow-router-i18n');
  api.mainModule('flow-router-i18n-tests.js');
});
