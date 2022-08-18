const mongoose = require("mongoose")

const Schema = mongoose.Schema

const vuelosSchema = new Schema(
  {
    data: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availability: {
      type: Number,
      required: true,
    }
  }
)

module.exports = mongoose.model("vuelos", vuelosSchema)