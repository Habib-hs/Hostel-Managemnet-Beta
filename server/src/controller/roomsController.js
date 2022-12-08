const Room = require("../models/roomModel");
const Hotel = require("../models/hotelModel");
const { createError } = "../utils/err";

exports.createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  //console.log(hotelId);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

exports.updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};
exports.updateRoomAvailability = async (req, res, next) => {
  try {
   const roomAvailability = await Room.updateOne(
      { "roomNumbers._id": req.params.roomId },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json(roomAvailability);
  } catch (err) {
    next(err);
  }
};


exports.deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
 // console.log(await Hotel.findById(hotelId));
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
     
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted but not delete.");
  } catch (err) {
    next(err);
  }
};

exports.getRoom = async (req, res, next) => {
  try {
  //  console.log(req.params.hotelId)
    const room = await Room.findById(req.params.roomid);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

exports.getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
