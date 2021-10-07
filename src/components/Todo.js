import React, { useState } from 'react'

const Todo = () => {
    
    const [values, setValue] = useState("");
    const [items, setItems] = useState([]);

    const itemDisplay = () => (
        <div>
            <ul>
            {items.map((item,index) => (    
                    <div>
                        <h5>{index+1}. {item}</h5>
                        <button className="btn btn-sm btn-outline-danger" values={item} onClick={onRemoveItem}>Delete</button>
                        
                    </div>
                ))}
            </ul>            
        </div>
    )

    const onRemoveItem = (e) => {
        const values = e.target.getAttribute("values")
        setItems(items.filter(item => item !== values))
    };

    const noItemDisplay = () => (
        <div classNam="text-center">
            <h3>Nothing To Display, Please Add Some Task</h3>
        </div>
    )

    const onAddButton = () => {
        if(values === "")
        {
            alert('Please Give Some Input')
        }
        else{
            setItems(items => [...items,values]);
            setValue("");
        }
    }

    return (
            <div className="container-fluid">
                    <div className="card">

                        <div class="card-header text-center">
                        <h1>TO-DO</h1>
                        </div>    

                        <div className="card-body text-center">
                        <span>Task Description</span><br/>
                        <input className="text-center" id="itemField" autoFocus={true} value={values} onChange={(e) => setValue(e.target.value)}/><br/>
                        <button className="btn btn-block btn-outline-success mt-2" onClick={() => onAddButton()}>Add Task</button>
                        
                        </div>
                        
                    </div>

                    <div className="card">
                        
                        <div className="card-body text-center">
                        {items.length === 0 ? noItemDisplay() : null }
                        </div>
                        <div className="card-body text-right">
                        {items.length !== 0 ? itemDisplay() : null }
                        </div>
                    </div>

            </div>
    )
}

export default Todo
