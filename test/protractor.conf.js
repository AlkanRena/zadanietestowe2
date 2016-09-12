exports.config = {
    framework:'jasmine',
    capabilities: {
       shardTestFiles: false,
        browserName: 'chrome'
    },
    specs: [
        'spec/index/index.spec.js',
        'spec/index/adding.spec.js',
        'spec/index/editing.spec.js'],
    baseUrl: 'http://localhost:3333'
    // seleniumAddress: 'http://localhost:4444/wd/hub'
};