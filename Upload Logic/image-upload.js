const multer = require('multer');
const uuid = require('uuid').v4;

// we will now configure multer
const upload = multer({
    storage: multer.diskStorage({
        // this is to declare where images will be stored
        destination: 'notes/images',
        // will make sure no clashes in the image name is encountered
        filename: function(req, file, cb) {
            cb(null, uuid() + '-' + file.originalname);
        }
    })
});

// the image is the name of the input tag that i described in the ejs file
const configuredMulterMiddleware = upload.single('image');

module.exports = configuredMulterMiddleware;