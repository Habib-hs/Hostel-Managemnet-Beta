const express = require("express");

const {
  verifyAdmin,
  verifyToken,
  verifyUser,
} = require("../utlis/verifyToken");
const roomsController = require("../controller/roomsController");

const router = express.Router();

router.put("/availability/:roomId", roomsController.updateRoomAvailability);

router
  .route("/:id/:hotelid")
  .delete(verifyToken, verifyAdmin, roomsController.deleteRoom);
  
router.route("/").get(roomsController.getRooms);
router.get("/:roomid",verifyToken, verifyAdmin, roomsController.getRoom )
router
  .route("/:hotelid")
  .post(verifyToken, verifyAdmin, roomsController.createRoom)
 // .get(verifyToken, verifyAdmin, roomsController.getRoom)
  //.delete(verifyToken, verifyUser, roomsController.deleteUser)
  .put(verifyToken, verifyAdmin, roomsController.updateRoom);




module.exports = router;
