const express = require("express");
const userController = require("../controller/userController");
const  { verifyAdmin, verifyToken, verifyUser } = require("../utlis/verifyToken");
const router = express.Router();


//  router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
//  })

//  router.get("/checkuser/:id",verifyToken,verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account") })

//  router.get("/checkadmin/:id",verifyToken, verifyAdmin, (req,res,next)=>{
//    res.send("hello admin, you are logged in and you can delete all accounts")
// })



router.route("/")
 .get(verifyToken, verifyAdmin, userController.getUsers);

router
  .route("/:id")
  .get(verifyToken, verifyUser, userController.getUser)
  .delete(verifyToken, verifyUser, userController.deleteUser)
  .put(verifyToken, verifyUser, userController.updateUser);

module.exports = router;
