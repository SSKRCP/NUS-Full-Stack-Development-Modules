import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [data, setData] = useState([])

  //**** Fetch Data */
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      if(!response.ok){
        throw new Error(`HTTP Error! Status: ${response.status}`)
      }
      return response.json()
      })
    .then(json => {
      console.log(json)
      setData(json)
    })
    .catch(error =>{
      console.error('Fetch Error:', error)
    })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <div id='usersData' style={{padding:'20px'}}>
        <h1>Users Data</h1>
        {
          data.length === 0 && (<p>No Data foud!</p>) 
        }
        {
           data.length > 0 &&
           (
            data.map(row => (
              <div  key={data.id}
                style={{
                  marginBottom: '20px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9f9f9',
                  textAlign:'left'
                }}>
                <h3>Title: {row.title}</h3>
                <p>
                    UserID: {row.userId} <br/>
                    ID: {row.id}
                </p>
                Completed? <input type='checkbox' checked={row.completed} title='Copleted'/>
              </div>
            ))
           )
        }
      </div>
      <div className="card">
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Counter : {counter}
        </button>     
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
