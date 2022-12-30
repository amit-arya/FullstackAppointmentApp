const User = require("../models/user");

exports.postAddUser = (req, res, next) => {
  const username = req.body.username;
  const phone = req.body.phone;
  const email = req.body.email;
  const newuser = User.create({
    username: username,
    phone: phone,
    email: email
  })
    .then(result => {
      console.log('Created User');
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    })
};

exports.getEditUser = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/users');
  }
  const userId = req.params.userId;
  User.findByPk(userId)
  .then(user => {
    if (!user) {
      return res.redirect("/users");
    }
    res.render("admin/edit-user", {
      pageTitle: "Edit User",
      path: "/edit-user",
      editing: editMode,
      user: user,
    });
  })
  .catch(err => console.log(err));
};

exports.postEditUser = (req, res, next) => {
  const userId = req.body.userId;
  const updatedUsername = req.body.username;
  const updatedPhone = req.body.phone;
  const updatedEmail = req.body.email;
  User.findByPk(userId)
  .then(user => {
    user.username = updatedUsername;
    user.phone = updatedPhone;
    user.email = updatedEmail;
    return user.save();
  })
  .then(result => {
    console.log('UPDATED PRODUCT!');
    res.redirect('/users');
  })
  .catch(err => console.log(err));
};

exports.postDeleteUser = (req, res, next) => {
  const userId = req.body.userId;
  User.findByPk(userId)
    .then(user => {
      return user.destroy();
    })
    .then(result => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/users');
    })
    .catch(err => console.log(err));
};