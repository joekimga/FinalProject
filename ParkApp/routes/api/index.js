//ParkWhiz
const router = require("express").Router();
const parkingRoutes = require("./parking");

// Parking routes
router.use("/parking", parkingRoutes);

module.exports = router;

///////////////////////////////////////////
 
//GoogleMaps apI