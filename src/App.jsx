import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './store/slices/counter'

function App() {

  const { counter}=useSelector((state)=>state.counter)
  const dispatch =useDispatch()

  return (
    <div className="App">
      <header className="App-header">
          <p>Count is  : {counter}</p>
        <p>
          <button type="button" onClick={()=>dispatch(increment())}> Increment </button>
          <button type="button" onClick={()=>dispatch(decrement())}> Decrement </button>
          <button type="button" onClick={()=>dispatch(incrementByAmount(20))}> Increment by Amount </button>
        </p>
      </header>
    </div>
  )
}

export default App
