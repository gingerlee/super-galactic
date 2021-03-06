// Karma configuration
// Generated on Fri Jan 05 2018 09:39:32 GMT-0800 (PST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jquery-3.2.1', 'jasmine', 'browserify', 'moment-2.9.0'],
    files: [
      'js/*.js',
      'spec/*-spec.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'js/*.js': [ 'browserify'],
      'spec/*.js': ['browserify'],
    },
    plugins: [
      'karma-jquery',
      'karma-browserify',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-moment'
    ],

    browserify: {
      debug: true,
      transform: [ [ 'babelify', {presets: ["es2015"]} ] ]
    },

    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
