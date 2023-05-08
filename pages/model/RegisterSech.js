const { default: mongoose } = require("mongoose");

const registerSche = new mongoose.Schema({
  fname: {
    type: String,
    require: true,
  },
  lname: {
    type: String,
    require: true,
  },
  c_address: {
    type: String,
    require: true,
  },
  p_address: {
    type: String,
    require: true,
  },
  dob: {
    type: String,
    require: true,
  },
  p_number: {
    type: String,
    require: true,
  },
  BloodGroup: {
    type: String,
    require: true,
  },
  garden_name: {
    type: String,
    require: true,
  },
  g_number: {
    type: String,
    require: true,
  },
});

module.exports =
  mongoose.models.register || mongoose.model("register", registerSche);
