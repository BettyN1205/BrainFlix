const { timeStamp } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const VIDEO_FILE_PATH = "./data/videos.json";

function getData() {
  const fileContent = fs.readFileSync(VIDEO_FILE_PATH);
  return JSON.parse(fileContent);
}

function writeData(data) {
  fs.writeFileSync(VIDEO_FILE_PATH, JSON.stringify(data, null, 2));
}

// GET /video
router.route("/").get((req, res) => {
  const videosData = getData();
  res.send(videosData);
});

// GET /video/:id
router.get("/:id", (req, res) => {
  const videosData = getData();
  const foundVideo = videosData.find((item) => {
    return item.id === req.params.id;
  });
  if (foundVideo) {
    return res.json(foundVideo);
  }
  res.status(404).json({
    error: {
      message: "Unable to find video",
      code: 404,
    },
  });
});

// POST /video
router.post("/", (req, res) => {
  try {
    const videosData = getData();
    const newVideo = {
      id: uuidv4(),
      ...req.body,
    };
    videosData.push(newVideo);
    writeData(videosData);

    res.status(201).json(newVideo);
  } catch (error) {
    console.error("Error processing POST request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST  /video/:id/comments 
router.post("/:id/comments",(req, res) => {
  try {
   
    const videosData = getData();
    const foundVideo = videosData.find((item) => {
      return item.id === req.params.id;
    });
    const newComment = {
      id: uuidv4(),
      ...req.body,
    }
    foundVideo.comments.push(newComment);
    writeData(videosData);
    res.status(201).json(foundVideo.comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//DELETE /video/:videoId/comments/:commentId
router.delete("/:id/comments/:commentId",(req,res)=>{
  try {
    const videosData = getData();
    const foundVideo = videosData.find((item) => {
      return item.id === req.params.id;
    });
    const commentId = req.params.commentId;
    const indexToRemove = foundVideo.comments.findIndex((comment) => {
      return comment.id === commentId;
    });
    console.log("indextoremove:",indexToRemove);

    if (indexToRemove === -1) {
      res.status(404).json({ error: "Comment not found" });
      return;
    }

    foundVideo.comments.splice(indexToRemove, 1);
    writeData(videosData);

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//PUT /video/:videoId/likes
router.put("/:id/likes",(req,res)=>{
  try {
    const videosData = getData();
    const foundVideo = videosData.find((item) => {
      return item.id === req.params.id;
    });
    foundVideo.likes+=1;
    writeData(videosData);
    res.status(200).json({
      likes: foundVideo.likes
    });
    
  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
