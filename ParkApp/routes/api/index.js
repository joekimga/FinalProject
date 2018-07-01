const router = require("express").Router();
const parkingRoutes = require("./parking");

// Book routes
router.use("/parking", parkingRoutes);

module.exports = router;
