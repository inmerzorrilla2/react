
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
   <div className='app'>
      <h1>Simple Cards</h1>
      <div className='app_container'>
        <Card 
        color = 'blue'
        text = 'Primary'
        />
        <Card 
        color = 'green'
        text = 'Secondary'
        />
        <Card
        color = 'red'
        text = 'Danger'
        />
      </div>
   </div>
  )
}

export default App
