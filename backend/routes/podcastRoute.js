const express = require('express');
const { uploadYoutubePodcast, getProjectPodcasts } = require('../controllers/podcastControllers');

const router = express.Router();

router.post('/upload', uploadYoutubePodcast);
router.get('/project/:projectId', getProjectPodcasts);

module.exports = router;
