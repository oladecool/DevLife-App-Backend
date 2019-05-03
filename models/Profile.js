const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CreateSchema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,

        max: 40
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String

    },
    skills: {
        type: [String]

    },
    bio: {
        type: String,

    },
    githubusername: {
        type: String
    },
    experience: [{
        title: {
            type: String,

        },
        company: {
            type: String,

        },
        location: {
            type: String
        },
        from: {
            type: Date,

        },
        to: {
            type: Date
        },
        current: {
            type: Boolean,
            default: false
        },
        location: {
            type: String,
        }
    }],

    education: [{
        school: {
            type: String,

        },
        degree: {
            type: String,

        },
        fieldofstudy: {
            type: String,

        },
        from: {
            type: Date,

        },
        to: {
            type: Date
        },
        current: {
            type: Boolean,
            default: false
        },
        location: {
            type: String,
        }
    }],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String
        },
        linkedin: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);