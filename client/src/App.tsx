import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    const res = fetch('http://localhost:4000/').then((res) => res.json())
    res.then((msgObj: { message: string }) => setMessage(msgObj.message))
  })
  return <div className="text-red-600">The message from the server is: {message}</div>
}

export default App
