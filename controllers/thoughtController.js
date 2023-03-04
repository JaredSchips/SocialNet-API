const { User, Thought } = require('../models');

module.exports = {
	// Get all thoughts
	getThoughts(req, res) {
		Thought.find()
			.then(thoughts => res.json(thoughts))
			.catch(err => res.status(500).json(err));
	},

	// Get a single thought
	getSingleThought(req, res) {
		Thought.findOne({ _id: req.params.thoughtId })
			.then(thought =>
				!thought
					? res.status(404)
						 .json({ message: 'No thought with that ID!' })
					: res.json(thought)
			)
			.catch(err => res.status(500).json(err));
	},

	// Create a new user
	createThought(req, res) {
		Thought.create(req.body)
			.then(thought => res.json(thought))
			.catch(err => res.status(500).json(err));
	},

	updateThought(req, res) {
		Thought.findByIdAndUpdate(
			req.params.thoughtId,
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then(thought =>
				!thought
					? res.status(404)
						 .json({ message: 'No thought with that ID!' })
					: res.json(thought)
			)
			.catch(err => res.status(500).json(err));
	},

	// Delete a user and associated thoughts
	deleteThought(req, res) {
		Thought.findByIdAndDelete(req.params.thoughtId)
			.then(thought =>
				!thought
					? res.status(404)
						 .json({ message: 'No thought with that ID!' })
					: User.findOneAndUpdate(
							{ thoughts: req.params.thoughtId },
							{ $pull: { thoughts: req.params.thoughtId } },
							{ new: true }
					  )
                      .then(() => res.json({ message: 'Thought deleted!' }))
			)
			.catch(err => res.status(500).json(err));
	},

	// Add a new friend to a user's friend list
	AddReaction(req, res) {
		Thought.findByIdAndUpdate(
			req.params.thoughtId,
			{ $addToSet: { reactions: req.body } },
			{ runValidators: true, new: true }
		)
			.then(thought =>
				!thought
					? res.status(404)
						 .json({ message: 'No thought with that ID!' })
					: res.json(thought)
			)
			.catch(err => res.status(500).json(err));
	},

	// Remove a friend from a user's friend list
	RemoveReaction(req, res) {
		Thought.findByIdAndUpdate(
			req.params.thoughtId,
			{ $pull: { reactions: { reactionId: req.params.reactionId } } },
			{ runValidators: true, new: true }
		)
			.then(thought =>
				!thought
					? res.status(404)
                         .json({ message: 'No thought with that ID!' })
					: res.json(thought)
			)
			.catch(err => res.status(500).json(err));
	},
};
