const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    AddFriend,
    RemoveFriend
} = require('../../controllers/userController');

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

router.route('/:userId/friends/:friendId')
    .post(AddFriend)
    .delete(RemoveFriend)

module.exports = router;
