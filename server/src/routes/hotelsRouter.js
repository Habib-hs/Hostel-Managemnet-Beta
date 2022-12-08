const express = require("express");
const hotelsController = require("../controller/hotelsController");
const router = express.Router();


router.get("/countByCity", hotelsController.countByCity);
router.get("/countByType", hotelsController.countByType);
router.get("/rooms/:hotelId", hotelsController.getHotelRooms);

router
  .route("/")
  .post(hotelsController.createHotel)
  .get(hotelsController.getHotels);

router
  .route("/:id")
  .get(hotelsController.getHotel)
  .delete(hotelsController.deleteHotel)
  .put(hotelsController.updateHotel)

module.exports = router;


// router.post("/", hotelsController.createHotel);
//router.put("/:id", hotelsController.updateHotel);
//router.delete("/:id", hotelsController.deleteHotel);
// router.get("/:id", hotelsController.getHotel);
// router.get("/", hotelsController.getHotels);
