import express from "express";
import { generateText } from "../utils/gpt";
import { validateRequest } from "../middleware/validateRequest";

const router = express.Router();

router.post("/", validateRequest, async (req, res) => {
    
    const {topic, type, tone, wordCount} = req.body;
    const prompt = `Write a ${tone} ${type} about the topic "${topic}" in around ${wordCount} words. 
                    Use clear academic English with appropriate vocabulary and coherence.`;


    try {
        const result = await generateText(prompt);
        res.json({result: result});
    } catch (error) {
        console.error("Generation Error:", error);
        throw error; // Error will be caught by error handler middleware
    }
    console.log("🧠 Request body:", req.body);
    console.log("📄 Prompt:", prompt);

});

export default router;