import { useState } from 'react'
import MessageButton from './Components/MessageButton'
import ColorChanger from './Components/ColorChanger'
import UserProfile from './Components/UserProfile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Task 1 - Handling Events in React</h1>
      <div>
        <MessageButton name="Alice" />
      </div>
      <h1>Task 2 - State Management using React Hooks</h1>
      <div>
        <ColorChanger/>
      </div>
      <h1>Task 3 - Asynchronous Data Fetching with AJAX</h1>
      <div>
        <UserProfile />
      </div>
    </>
  )
}

export default App
