const express = require('express');
const { createProject, getUserProjects } = require('../controllers/projectController');

const router = express.Router();

router.post('/create', createProject);
router.get('/user/:userId', getUserProjects);

module.exports = router;
