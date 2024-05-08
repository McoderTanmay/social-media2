const userModel = require("../../model/user");

module.exports = {
  async createuser(data) {
    return await userModel.create(data);
  },
  async getByEmail(email){
    return await userModel.findOne({
      email:email
    })
  }
};
