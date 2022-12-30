const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'user.html'));
});

router.post('/', adminController.postAddUser);

router.get('/edit-user/:userId', adminController.getEditUser);

router.post('/edit-user', adminController.postEditUser);

router.post('/delete-user',adminController.postDeleteUser);

module.exports = router;