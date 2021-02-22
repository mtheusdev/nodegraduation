var User = require("./User")
var knex = require('../database/connection');

class PasswordToken {
    async create(email) {
        var user = await User.findEmail(email)
        if (user != undefined) {
            try {

                var token = Date.now()
                await knex.insert({
                    user_id: user.id,
                    used: 0,
                    token: token, // uuID
                }).table("password_tokens")

                return { status: true, token: token }
            } catch (err) {
                return { status: false, err: err }
            }

        } else {
            return { status: false, err: "O email nao existe " }
        }

    }
}



module.exports = new PasswordToken()