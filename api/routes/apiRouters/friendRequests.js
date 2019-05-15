var express = require("express");

var friendRequests = require('../../controllers/friendRequestsController');

var friendRequestsRouter = express.Router();

friendRequestsRouter.get("/:email", friendRequests.userPendingRequests);

friendRequestsRouter.post("/new", friendRequests.new);

friendRequestsRouter.post("/accept", friendRequests.accept);
friendRequestsRouter.post("/refuse", friendRequests.refuse);

 
module.exports = friendRequestsRouter;