var exec = require('cordova/exec');

exports.position = function (success, error) {
    exec(success, error, 'AmapApi', 'getCurrentPosition');
};
