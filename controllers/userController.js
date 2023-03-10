const { User, Thought } = require('../models');

module.exports = {
	// Get all users
	getUsers(req, res) {
		User.find()
			.then(users => res.json(users))
			.catch(err => res.status(500).json(err));
	},

	// Get a single user
	getSingleUser(req, res) {
		User.findOne({ _id: req.params.userId })
			.then(user =>
				!user
					? res.status(404).json({ message: 'No user with that ID!' })
					: res.json(user)
			)
			.catch(err => res.status(500).json(err));
	},

	// Create a new user
	createUser(req, res) {
		User.create(req.body)
			.then(user => res.json(user))
			.catch(err => res.status(500).json(err));
	},

	updateUser(req, res) {
		User.findByIdAndUpdate(
			req.params.userId,
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then(user =>
				!user
					? res.status(404).json({ message: 'No user with that ID!' })
					: res.json(user)
			)
			.catch(err => res.status(500).json(err));
	},

	// Delete a user and associated thoughts
	deleteUser(req, res) {
		User.findOneAndDelete({ _id: req.params.userId })
			.then(user =>
				!user
					? res.status(404).json({ message: 'No user with that ID!' })
					: Thought.deleteMany({
							_id: { $in: user.thoughts },
					  })
			)
			.then(() =>
				res.json({ message: 'User and associated thoughts deleted!' })
			)
			.catch(err => res.status(500).json(err));
	},

	// Add a new friend to a user's friend list
	AddFriend(req, res) {
		User.findByIdAndUpdate(
			req.params.userId,
			{ $addToSet: { friends: req.params.friendId } },
			{ runValidators: true, new: true }
		)
			.then(user =>
				!user
					? res.status(404).json({ message: 'No user with that ID!' })
					: res.json(user)
			)
			.catch(err => res.status(500).json(err));
	},

	// Remove a friend from a user's friend list
	RemoveFriend(req, res) {
		User.findByIdAndUpdate(
			req.params.userId,
			{ $pull: { friends: req.params.friendId } },
			{ runValidators: true, new: true }
		)
			.then(user =>
				!user
					? res.status(404).json({ message: 'No user with that ID!' })
					: res.json(user)
			)
			.catch(err => res.status(500).json(err));
	},
};
