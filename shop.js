const User = require("../models/user");

exports.getIndex = async (req, res, next) => {
    await User.findAll()
        .then(users => {
            res.render('shop/index', {
                users: users,
                pageTitle: 'Users',
                path: '/',
            });
        })
        .catch(err => console.log(err));
};