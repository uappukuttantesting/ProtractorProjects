var HtmlReporter = require('protractor-beautiful-reporter');
directConnect: true

function allure_report_jetty_deploy() {
    console.log('Generating allure reports from xml using maven plugin and deploying them on port:1234[localhost or jenkins node ip] via jetty server.It should not take more than 1 minute......');
    console.log('If at times there is some issue in report deployment or reports are not available on mentioned port, please restart jenkins master and re run the test build');

    var exec = require('child_process').exec;

    function puts(error, stdout, stderr) {
        sys.puts(stdout)
    }
    exec("mvn site -Dallure.results_pattern=allure-results && mvn jetty:run -Djetty.port=1234", puts);
    var startTimes = Date.now();
    while (Date.now() - startTimes < 60000) {
    }
}



exports.config = {

    framework: 'jasmine2',
    specs: ['../JSFiles/POM_TestSpec/Test1_spec.js','../JSFiles/POM_TestSpec/Test2_spec.js'],

    onPrepare: function () {



        // Add a screenshot reporter and store screenshots to `/Reports`:
        var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
        jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
            dest: './Reports',
            filename: 'Results.html'
        }));

        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

        console.log('Deleting old allure reports and files.');
        var sys = require('util')
        var exec = require('child_process').exec;

        function puts(error, stdout, stderr) {
            sys.puts(stdout)
        }

        exec("RD /S /Q allure-results", puts);
        exec("RD /S /Q target", puts);

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport: {
                resultsDir: './allure-results/'
            }
        }));
        console.log('Stopping jetty server if any previous instance is running on port 1234.')

        exec("mvn jetty:stop -Djetty.port=1234", puts);
        var startTimer = Date.now();
        while (Date.now() - startTimer < 10000) {
        }

    },
    

    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000
    },

    
};