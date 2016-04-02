var nativejsx = require("nativejsx"),
    fs = require('fs'),
    glob = require("glob"),
    async = require("async"),
    argv = require('minimist')(process.argv.slice(2));

var parseFn = function (filePath, asyncCallback) {
    var output = filePath.replace(".jsx", ".js");

    nativejsx.parse(filePath, {
        declarationType: 'var',
        variablePrefix: '$$'
    }).then(function(transpiledGoodness) {
        fs.writeFile(output, transpiledGoodness, function (err) {
            asyncCallback(err, "ok");
        });
    });
}

glob(argv.src + "/**/*.jsx", {}, function (err, files) {

    if (err) {
        console.log(err)
        return;
    }

    async.concat(files, parseFn, function (err, result) {
        if (err) {
            console.log(err)
            return;
        }
        console.log("Parsed " + result.length + " jsx files.");
    });
});
