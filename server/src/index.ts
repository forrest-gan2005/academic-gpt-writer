import express from "express";
import cors from "cors";
import router from "./routes/generate";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/generate", router);

const PORT = process.env.PORT || 8888;


app.listen (PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
})