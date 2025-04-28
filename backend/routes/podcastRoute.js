const express = require('express');
const { uploadYoutubePodcast, getProjectPodcasts,updatePodcast } = require('../controllers/podcastControllers');

const router = express.Router();

router.post('/upload', uploadYoutubePodcast);
router.get('/project/:projectId', getProjectPodcasts);
router.put('/:podcastId', updatePodcast)
module.exports = router;
