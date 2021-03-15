cordova.commandProxy.add("cordova-plugin-windows-libraries",{
    saveFileToDocuments:function(successCallback,errorCallback, args) {
        //   
        Windows.Storage.KnownFolders.documentsLibrary.
            createFileAsync(args[0],Windows.Storage.CreationCollisionOption.replaceExisting)
            .then(function (file) {
                // Open the returned file in order to copy the data 
			    file.openAsync(Windows.Storage.FileAccessMode.readWrite)
                    .then(function (output) { 
                        // Get the IInputStream stream from the blob object 
				        var input = args[1].msDetachStream(); 
        				// Copy the stream from the blob to the File stream 
		        		Windows.Storage.Streams.RandomAccessStream.copyAsync(input, output).then(function () { 
				        	output.flushAsync().done(function () { 
						        input.close(); 
						        output.close(); 
                                successCallback(file);
					        }, function (err) {
                                    errorCallback(err);
                                }); 
				        }, function (err) {
                                errorCallback(err);
                            }); 
                    }, function (err) {
                            errorCallback(err);
                        });
                }, function (err) {
                    errorCallback(err);
                }) 
            .
            done(null, function (err) {
                errorCallback(err);
        });
    }
});
