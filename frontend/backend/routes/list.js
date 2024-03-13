const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

// Create task
router.post("/addTask", async (req, res) => {
  try {
    const { title, description, email } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create new task and save it
    const list = new List({ title, description, user: existingUser });
    await list.save();

    // Add task to user's list and save user
    existingUser.list.push(list);
    await existingUser.save();

    res.status(200).json({ list });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update task title and description
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, description } = req.body;

    // Update task and send response
    await List.findByIdAndUpdate(req.params.id, { title, description });
    res.status(200).json({ message: "Task Updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Mark task as completed or uncompleted
router.put("/toggleTaskStatus/:id", async (req, res) => {
  try {
    const { completed } = req.body;

    // Update task completion status
    await List.findByIdAndUpdate(req.params.id, { completed });
    res.status(200).json({ message: "Task status updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete task
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const existingTask = await List.findById(req.params.id);
    if (!existingTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    const existingUser = await User.findOneAndUpdate(
      { list: req.params.id },
      { $pull: { list: req.params.id } }
    );

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete task and send response
    await List.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get tasks
router.get("/getTasks/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const list = await List.find({ user: user._id }).sort({ createdAt: -1 });
    res.status(200).json({ list });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
