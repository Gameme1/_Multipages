import { useState } from "react";
import Variable from "../Variable/variable";
import './add.css'

function Add() {
    const {a, setA} = useState(0)
    const {b, setB} = useState(0)
    return ( 
        <div className="add-contrainer">
        <h3>Add</h3>
        <h2><span>A=3</span> <span>B=5</span> <span>A+B=8</span></h2>
        <div className="add-variable">
            <Variable name={'A'} value={a} setValue={setA}/>
            <Variable name={'B'} value={b} setValue={setB}/>
        </div>
        </div>
    );
}

export default Add;