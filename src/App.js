import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/CounterSlice';
import { useEffect } from 'react';
import { getCountry } from './redux/features/country/countrySlice';

function App() {
  const dispatch = useDispatch();
  
  const {counter} = useSelector(state => state.counter)
  const {country} = useSelector(state => state.country)
  console.log(country);

  useEffect(()=>{
    dispatch(getCountry())
  },[])

  return (
    <div className="App">
      <span onClick={()=> dispatch(decrement())}>-</span>
      <span>{counter}</span> 
      <span  onClick={()=> dispatch(increment())}>+</span>
    </div>
  );
}

export default App;
