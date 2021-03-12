cordova.commandProxy.add("cordova-plugin-windows-libraries",{
    saveFileToDocuments:function(successCallback,errorCallback,fileEntry) {
    	 // Search for available camera devices
        // This is necessary to detect which camera (front or back) we should use
        Windows.Storage.KnownFolders.documentsLibrary.
            createFileAsync(fileEntry,Windows.Storage.CreationCollisionOption.replaceExisting)
            .then(function (file) {
            	successCallback(file);
            }).
            done(null, function (err) {
                errorCallback(err);
        });
    }
});
