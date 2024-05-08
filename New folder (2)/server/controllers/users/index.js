const userQuery = require("../../querries/users");
const userModel = require("../../model/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports = {
  async signin(req, res) {
    let email = req.body.email;
    let user_name = req.body.user_name;
    let password = req.body.password;
    password = await bcrypt.hash(password,10);
    let data = {
      email:email,
      user_name:user_name,
      password: password,
    };
    try {
      let checkUser= await userQuery.getByEmail(email);
      if(checkUser){
        return res.status(403).send({
          code: 403,
          status:"Email alerady exist"
        })
      }
      let user = await userQuery.createuser(data);
      return res.status(200).send({
        code: 200,
        status: "success",
        data: user,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(422)
        .send({ code: 422, status: "failed", massage: error.massage });
    }
  },
  async login(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    try {
      let authData = await userQuery.getByEmail(email);
      bcrypt.compare(password,authData.password).then((result)=>{
        let payload = {
          id:authData.id,
          roles:"user" 
        }
        let token = jwt.sign(payload,"randomkey",{expiresIn:"500h"});
        if (result) {
          return res.status(200)
          .send({ code: 200, status:"successful", data: token, user: authData})
        }
        return res
        .status(400)
        .send({ code:400, status: "failed", msg: "Incorrect password" })
      })
    } catch (error) {
      return res.status(401).send({
        code:401,
        status:"failed",
        massage:"Incorrect User Name"
      })
    }
  },
  async getUserName(req, res){
    const id = req.params._id;
    try {
      const username = await userModel.findById(id, { user_name: 1 })
      .exec();
      return res
          .send({ code: 200, status:"successful", data: username})
    } catch (error) {
      console.log(error);
      return res.send({
        code:401,
        status:"failed",
        massage:"Incorrect User Name"
      })
    }
  }
};
