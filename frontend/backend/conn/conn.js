const mongoose = require("mongoose");

const conn = async () => {
    try {
      await mongoose.connect("mongodb+srv://vbhv:Vishal@cluster0.sldfccj.mongodb.net/");
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  };
  
  conn();
  