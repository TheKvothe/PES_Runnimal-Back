var express = require("express");

var photo = require('../../controllers/photoController');
// var photos = require('../../models/photoModel');
var photoRouter = express.Router();

photoRouter.route("/users/:email")
    .post(photo.uploadUser)
    .get(photo.getUser);


photoRouter.route("/pets/:owner/:name")
    .post(photo.uploadPet)
    .get(photo.getPet);
module.exports = photoRouter;