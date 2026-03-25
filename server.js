import app from "./src/app.js";
import connectDB from "./db/db.js";
import imagekit from "./utils/imagekit.js";
import express from "express";
import multer from "multer";
import Post from "./model/post.model.js";
import cors  from "cors"

app.use(cors());
app.use(express.json());
connectDB();

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  const { caption } = req.body;
  try {
    const uploadImage = await imagekit.files.upload({
      file: req.file.buffer.toString("base64"),
      fileName: req.file.originalname,
      folder: "/postlify/posts",
    });

    const newPost = await Post.create({
      image: uploadImage.url,
      caption: caption,
    });
    res.status(201).json({
      mesage: "Successfully posted",
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
