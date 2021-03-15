var exec = require('cordova/exec');

exports.saveFileToDocuments = function (arg0,arg1,  success, error) {
    exec(success, error, 'cordova-plugin-windows-libraries', 'saveFileToDocuments', [arg0, arg1]);
};

exports.deleteFileFromDocuments = function (arg0,  success, error) {
    exec(success, error, 'cordova-plugin-windows-libraries', 'deleteFileFromDocuments', [arg0]);
};
