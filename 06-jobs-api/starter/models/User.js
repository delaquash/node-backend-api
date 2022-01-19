const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    name:{
        type: String,
        required: [true, 'Please provide a name'],
        minLength: 8,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, "Kindly provide a password"],
        match:  [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
          unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        // minlength and maxlength will be removed once we hash our password
        minLength: 8,
        maxLength: 50
    }
})

module.exports =mongoose.model('User', UserSchema)