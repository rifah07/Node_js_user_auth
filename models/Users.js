const mongoose= require('mongose')
const userSchema= new mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    }
}, {
    timestramps: true
})

module.exports= User= mongoose.model("User", userSchema)