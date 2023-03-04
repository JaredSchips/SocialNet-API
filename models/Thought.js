const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const Thought = model('thought', new Schema(
		{
			thoughtText: {
				type: String,
				required: true,
				min: 1,
				max: 280,
			},
			createdAt: {
				type: Date,
				default: Date.now,
				get: date =>
					date.toLocaleString('en-US', {
						dateStyle: 'medium',
						timeStyle: 'short'
					}),
			},
			username: {
				type: String,
				required: true,
			},
			reactions: {
				type: [reactionSchema],
			},
		},
		{
			virtuals: {
				reactionCount: {
					get() {
						return this.reactions?.length || 0;
					},
				},
			},
			toJSON: {
				getters: true,
			},
			id: false,
		}
	)
);

module.exports = Thought;
