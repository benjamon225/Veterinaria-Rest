const  { Error } = require("mongoose");
const User = require("../model/User");

const err = Error

//registrar usuario
module.exports.registrar = (req, res) => {
  const { username, password, email } = req.body;

  console.log(username, password, email);
  console.log(req.body);
  const user = new User({
    username,
    password,
    email,
  });

  user.save((error, user) => {
    if (error) {
      return res.status(500).json({
        message: `Error al registrar usuario ${error}`,
      });
    }
    res.redirect("/register");
  });
};

//loguearse
module.exports.loguin = (req, res) => {
  const { username, password } = req.body;

  console.log(username, password)

  User.findOne({ username }, (err, user)=>{
    if (err) {
        res.status(500).json({
          message: "Error al autenticar y qu pasa",
        });
      } else if (!user) {
        res.status(500).json({
          message: "El usuario no existe",
        });
      } else {
        user.passwordCorrect(password, (err, result) => {
          if (err) {
            console.log(err)
            res.status(500).json({
              message: `Error al autenticar`,
            });
          } else if (result) {
            res.redirect('/mascotas')
          } else {
            res.status(500).json({
              message: "Usuario Y/O password incorrectos",
            });
          }
        });
      }
  });
  
};
