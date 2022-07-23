const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mascotaSchema = new Schema(
  {
    nombre: String,
    edad: Number,
    especie: String,
    raza: String,
    diagnostico: String,
    duenioNombre: String,
    duenioApellido: String,
    duenioTelefono: Number,
    duenioEmail: String
  },
  { versionKey: false }
)

module.exports = mongoose.model('mascotas', mascotaSchema)
