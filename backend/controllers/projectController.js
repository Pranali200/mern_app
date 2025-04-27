const Project = require('../models/Project');

const createProject = async (req, res) => {
  try {
    const { userId, name } = req.body;

    if (!userId || !name) {
      return res.status(400).json({ message: "userId and name are required" });
    }

    const newProject = new Project({ user: userId, name });
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getUserProjects = async (req, res) => {
  try {
    let { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    userId = userId.trim();

    const projects = await Project.find({ user: userId }).sort({ createdAt: -1 });

    res.status(200).json({ projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createProject, getUserProjects };
