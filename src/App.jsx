import { useState } from 'react'
import { Configuration, OpenAIApi} from 'openai'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
   
  const Configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  })
    
  const openai = new OpenAIApi(Configuration);
   
  return (
    <>
    <div className='App'>
    <h1>AI Image Generator</h1>
    <div className='Card'>
         
    </div>
      <p>
        Powered By OpenAI
      </p>
      </div>
    </>
  )
}

export default App
