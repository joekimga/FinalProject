//ParkWhiz API
const router = require("express").Router();
const parkingController = require("../../controllers/parkingController");

// Matches with "/api/parking"
router.route("/")
  .get(parkingController.findAll)
  .post(parkingController.create);

// Matches with "/api/parking/:id"
router
  .route("/:id")
  .get(parkingController.findById)
  .put(parkingController.update)
  .delete(parkingController.remove);

module.exports = router;

//////////////////

//React-Map-Gl by Uber






/////////////////////////////

//GoogleMaps API

