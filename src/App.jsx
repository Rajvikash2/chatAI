import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [ask, setAsk] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const apiKey = import.meta.env.VITE_API_KEY;
  async function generateAnswer() {
    try {
      setLoading(true);
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [
                {
                  text: ask,
                },
              ],
            },
          ],
        }
      );
      setAnswer(response.data.candidates[0].content.parts[0].text);
      setLoading(false);
      setAsk('');
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  return (
    <>
      <h1>Chat AI</h1>
      <textarea value={ask} onChange={(e)=>setAsk(e.target.value)}></textarea><br/>
      <button onClick={generateAnswer}>generate</button>
      {loading && <h2>Generating...</h2>}
      <p>{answer}</p>
    </>
  )
}

export default App
