const express=require("express");
const cors=require("cors");
const app=express();

const videoRoutes=require("./routes/videos");

app.use(cors());
app.use(express.json());

app.use("/video",videoRoutes);

app.listen(8010,()=>{
    console.log("server running at 8010");
});

