const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
        },
        responseBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        }, 
    }
);

reactionSchema.virtual('reactionCount').get(function() {

    return new Date(this.createdAt).toLocaleDateString();

});

module.exports = reactionSchema;