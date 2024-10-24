import { useState } from 'react';
import Variable from '../Variable/variable';
import './Temperature.css'
function Temperature() {
    const {celcuis, setCelsius} = useState(25)
    const {fahrenhiet, setFahrenhiet} = useState(77)
    const {keven, setKeven} = useState(298.15)

    return ( 
        <div className='temperature-contrainer'>
            <h3 className='temperature-title'>Temperature</h3>
            <h3>
                <span className='badge bg-primary'>25.00C</span>
                <span className='badge bg-primary'>77.00F</span>
                <span className='badge bg-primary'>298.15K</span></h3>
            <div className='temperature-variable'>
                <Variable name={'Celsius'} value={celcuis} setValue={setCelsius}/>
                <Variable name={'Fahrenhiet'} value={77}/>
                <Variable name={'Keven'} value={298.15}/>
            </div>
        </div> 

    );
}

export default Temperature;