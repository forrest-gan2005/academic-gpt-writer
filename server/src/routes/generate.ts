import express from "express";
import { generateText } from "../utils/gpt";

const router = express.Router();

router.post("/", async (req, res) => {
    
    const {topic, type, tone, wordCount} = req.body;
    const prompt = `Write a ${tone} ${type} about the topic "${topic}" in around ${wordCount} words. 
                    Use clear academic English with appropriate vocabulary and coherence.`;


    try {
        const result = await generateText(prompt);
        res.json({result: result});
    } catch (error) {
        console.log("GPT Error: ", error);
        res.status(500).json({ error: "Failed to generate text" });
    }
    console.log("🧠 Request body:", req.body);
    console.log("📄 Prompt:", prompt);

});

export default router;