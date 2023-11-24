import { useState } from 'react'
import './Tasks.css'
import StringTasks from './StringTask/StringTasks';
import ArrayTasks from './ArrayTask/ArrayTasks';
import MathTasks from './MathTasks/MathTasks.jsx';

export default function Tasks(){

    const [taskDisplay,setTaskDisplay] = useState('string');

    return(
        <div className="task-container">
            <div className="task-button_container">
                <button onClick={() => setTaskDisplay('string')}>String </button>
                <button onClick={() => setTaskDisplay('array')}>Array </button>
                <button onClick={() => setTaskDisplay('')}>Mathematical</button>
            </div>

            {taskDisplay === 'string' ? <StringTasks /> 
            : taskDisplay === 'array' ? <ArrayTasks /> 
            :<MathTasks />
            }
        </div>
    )
}