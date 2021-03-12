var exec = require('cordova/exec');

exports.saveFileToDocuments = function (arg0,arg1,  success, error) {
    exec(success, error, 'cordova-plugin-windows-libraries', 'saveFileToDocuments', [arg0, arg1]);
};
