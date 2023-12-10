const express = require("express");
const router = express.Router();
const fs = require("fs");

const VIDEO_FILE_PATH = "./data/videos.json";

function getData() {
  const fileContent = fs.readFileSync(VIDEO_FILE_PATH);
  return JSON.parse(fileContent);
}

router.route("/").get((req, res) => {
  const videosData = getData();
  res.send(videosData);
});

//GET /videos/:id

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

module.exports = router;
