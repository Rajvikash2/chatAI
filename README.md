# 🤖 Chat AI with Gemini API

Welcome to the **Chat AI** project! This application is a responsive and intelligent chatbot built using **React**, **Vite**, and the powerful **Gemini API** for generating human-like responses. 🚀

## 🌟 Features

- 🧠 **AI-Powered Chat**: Seamlessly interact with the Gemini AI model for realistic and meaningful conversations.
- ⚡ **Fast and Modern**: Built with React and Vite for a blazing-fast development and user experience.
- 🔐 **Secure API Integration**: Uses environment variables to keep sensitive information, like your API key, safe.
- 🎨 **Responsive UI**: Chat with the AI on any device with an intuitive and user-friendly interface.

## 📦 Tech Stack

- **Frontend**: React + Vite ⚛️
- **Backend**: Gemini API (Google Generative Language API) 🌌
- **Styling**: Tailwind CSS (optional, but recommended for sleek design) 💅

## 🛠️ Setup and Installation

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/Rajvikash2/chatAI.git
cd chatBot
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Your API Key

Create a `.env` file in the root directory and add your Gemini API key:
```env
VITE_API_KEY=your_actual_api_key
```
> ⚠️ Ensure you restart the dev server if you make changes to `.env`.

### 4. Start the Development Server
```bash
npm run dev
```
The app will be live at [http://localhost:5173](http://localhost:5173). 🌐

## 🚀 Usage

1. Open the app in your browser.
2. Type your message in the chatbox.
3. Watch the AI generate amazing responses in real-time!

## 📚 API Integration

The application communicates with the Gemini API using a dynamically generated URL that includes the API key from the `.env` file. Here's an example:

```javascript
const baseUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
const apiKey = import.meta.env.VITE_API_KEY;

const url = `${baseUrl}?key=${apiKey}`;
```

## 🤝 Contributions

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request. 💡


## 📧 Contact

Have questions or feedback? Open an issue on GitHub! ✨

---

Happy Coding! 💻✨

