const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkingSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  synopsis: { type: String },
  date: { type: Date, default: Date.now },
  rating: { type: String },
  parkingType: { type: String},
  crossStreet: { type: String},
  price: { type: String },
  lighting: { type: String },
  businessHours: { type: String },
  eventPricing: { type: String },
  safety: {type: String },
  zipCode: { type: String },


});

const Parking = mongoose.model("Parking", parkingSchema);

module.exports = Parking;
