Package.describe({
    summary: "Accounts Templates styled for ScotchDr.am"
});

Package.on_use(function(api, where) {
    api.use([
        'service-configuration',
        'accounts-base',
        'accounts-templates-core',
        'templating',
        'less'
    ], 'client');

    api.add_files([
        'lib/accounts-templates-scotchapp.html',
        'lib/accounts-templates-scotchapp.js',
        'lib/accounts-templates-scotchapp.less'
    ], ['client']);

    api.use([
        'service-configuration',
        'accounts-password',
        'accounts-base',
        'accounts-templates-core',
    ], 'server');

    api.imply([
        'accounts-templates-core',
        'service-configuration',
    ], ['client', 'server']);
});

Package.on_test(function(api) {
    api.use([
        'accounts-templates-scotchapp',
        'accounts-templates-core',
    ]);
    api.use(['tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('tests/accounts-templates-scotchapp_tests.js', ['client', 'server']);
});