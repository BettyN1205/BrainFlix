const express=require("express");
const cors=require("cors");
const app=express();

const videoRoutes=require("./routes/videos");

app.get("/",(req,res)=>{
    res.send("homepage");
})

app.use(cors());

app.use("/video",videoRoutes);

app.listen(8010,()=>{
    console.log("server running at 8010");
});

// app.get("/",(req,res)=>{
//     res.send("homepage");
// })