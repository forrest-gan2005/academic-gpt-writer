import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { validateEnv } from "./utils/env";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";
import generateRouter from "./routes/generate";

// Validate environment variables
validateEnv();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use("/generate", generateRouter);

// Error handling
app.use(errorHandler);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});