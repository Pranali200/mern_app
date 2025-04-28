const Podcast = require('../models/Podcast');
const Project = require('../models/Project');

const { getTranscriptFromYoutube } = require('../utils/youtubeTranscript');

const uploadYoutubePodcast = async (req, res) => {
  try {
    const { projectId, name, videoUrl } = req.body;

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

const getProjectPodcasts = async (req, res) => {
  try {
    const { projectId } = req.params;

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


 const updatePodcast = async (req, res) => {
    try {
      const { podcastId } = req.params;
      const { transcript } = req.body;
  
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
  

module.exports = { uploadYoutubePodcast, getProjectPodcasts,updatePodcast };
