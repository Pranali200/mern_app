const Podcast = require('../models/Podcast');
const Project = require('../models/Project');
const { getTranscriptFromYoutube } = require('../utils/youtubeTranscript');

exports.uploadYoutubePodcast = async (req, res) => {
    const { projectId, name, videoUrl } = req.body;
    try {
        if (!projectId || !name || !videoUrl) {
            return res.status(400).json({ message: "projectId, name, and videoUrl are required" });
        }

        const transcript = await getTranscriptFromYoutube(videoUrl);
        const newPodcast = new Podcast({
            project: projectId,
            name,
            transcript,
        });

        await newPodcast.save();
        await Project.findByIdAndUpdate(projectId, { $inc: { files: 1 } });

        res.status(201).json({ message: "Podcast uploaded successfully", podcast: newPodcast });
    } catch (error) {
        console.error('Error uploading podcast:', error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getProjectPodcasts = async (req, res) => {
    const { projectId } = req.params;
    try {
        if (!projectId) {
            return res.status(400).json({ message: "Project ID is required" });
        }

        const podcasts = await Podcast.find({ project: projectId }).sort({ createdAt: -1 });
        res.status(200).json({ podcasts });
    } catch (error) {
        console.error('Error fetching podcasts:', error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.updatePodcast = async (req, res) => {
    const { podcastId } = req.params;
    const { transcript } = req.body;
    try {
        if (!podcastId) {
            return res.status(400).json({ message: "Podcast ID is required" });
        }

        const updatedPodcast = await Podcast.findByIdAndUpdate(
            podcastId,
            { transcript },
            { new: true }
        );

        if (!updatedPodcast) {
            return res.status(404).json({ message: "Podcast not found" });
        }

        res.status(200).json({ message: "Podcast updated successfully", podcast: updatedPodcast });
    } catch (error) {
        console.error('Error updating podcast:', error);
        res.status(500).json({ message: "Server error" });
    }
};
