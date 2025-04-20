# Academic Writing Assistant

A web application that helps users generate academic text using AI. The application allows users to specify the topic, type of text, tone, and word count to generate high-quality academic content.

## Features

- Generate different types of academic text:
  - Introduction
  - Summary
  - Email
  - Conclusion
- Customize the tone:
  - Academic
  - Formal
  - Friendly
- Specify word count
- Clean and intuitive user interface
- Real-time text generation

## Tech Stack

- Frontend:
  - React
  - TypeScript
  - Vite
  - Tailwind CSS

- Backend:
  - Node.js
  - Express
  - TypeScript
  - Hugging Face API (Zephyr-7b-beta model)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Hugging Face API token

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/academic-gpt-writer.git
cd academic-gpt-writer
```

2. Install dependencies for both client and server:
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Create a `.env` file in the server directory with your Hugging Face API token:
```
HUGGINGFACE_API_TOKEN=your_token_here
```

### Running the Application

1. Start the server:
```bash
cd server
npm run dev
```

2. Start the client:
```bash
cd client
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter your topic in the input field
2. Select the type of text you want to generate
3. Choose the desired tone
4. Specify the word count
5. Click "Generate" to create your text

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📌 Features

- 🧠 Based on GPT (OpenAI) API
- 📝 Generate academic-style English paragraphs from topic + tone + type
- ✨ Customize word count, tone, and content type
- ⚡ Fast and easy to use API (RESTful)
- 🚀 Ready for frontend integration

---

## 🛠️ Tech Stack

- **Backend**: Express + TypeScript
- **AI Engine**: OpenAI API (text-davinci-003)
- **Server Config**: dotenv, CORS, modular routes
- **Frontend (soon)**: React + Tailwind (TBD)

---

## 📂 Project Structure

```bash
academic-gpt-writer/
├── server/
│   ├── src/
│   │   ├── index.ts            # Main entry point
│   │   ├── routes/generate.ts  # POST /generate API route
│   │   └── utils/gpt.ts        # GPT logic (OpenAI call)
│   ├── .env                    # Store your OpenAI API Key here
│   ├── package.json
│   └── tsconfig.json
