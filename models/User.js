const { Schema, model } = require('mongoose');

const isEmail = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/;

const User = model('user', new Schema(
		{
			username: {
				type: String,
				unique: true,
				required: true,
				trim: true,
			},
			email: {
				type: String,
				unique: true,
				required: true,
				match: isEmail,
			},

			thoughts: [
				{
					type: Schema.Types.ObjectId,
					ref: 'thought',
				},
			],

			friends: [
				{
					type: Schema.Types.ObjectId,
					ref: 'user',
				},
			],
		},
		{
			virtuals: {
				friendCount: {
					get() {
						return this.friends?.length || 0;
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

module.exports = User;
