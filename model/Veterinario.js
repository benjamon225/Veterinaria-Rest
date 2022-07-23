const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const veterinarioSchema = new Schema(
  {
    rut: String,
    nombre: String,
    apellido: String,
    edad: Number,
    especialidad: String,
    telefono: Number,
    email: String
  },
  { versionKey: false }
)

module.exports = mongoose.model('veterinarios', veterinarioSchema);