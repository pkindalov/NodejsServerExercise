const homePageHandler = require('./home-page');
const faviconHandler = require('./favicon');
const staticFilesHandler = require('./static-files');
const imageUploadHandler = require('./image-upload-handler');

module.exports = [
     homePageHandler,
     faviconHandler,
     imageUploadHandler,
     staticFilesHandler
];