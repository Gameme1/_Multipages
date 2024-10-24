import { useState } from 'react'
import './counter.css'
function Counter(props) {

    const [value, setValue] = useState(props.value)

    function increment(){
        // value = value + 1
        setValue(value + 1)
        console.log(value)
    }
    function decrement(){
        // value = value - 1
        setValue(value - 1)
        console.log(value)
    }
    return ( 
        <div className='counter-contrainer'>
            <h3 className='title'>{props.name}</h3>
            <button className='btn btn-danger' onClick={decrement}>-</button>
            <span className='value'>{value}</span>
            <button className='btn btn-success' onClick={increment}>+</button>
        </div> 
    );
}

export default Counter;