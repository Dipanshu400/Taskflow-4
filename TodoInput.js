import React, {useState} from 'react'

function TodoInput(props) {

    const[inputText, setInputText]=useState('');
    const handleEnterPress=(e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText('')
        }
    }
    return (
        <div>
            <input  className="input-box-todo" value={inputText} type="text" placeholder="Write your todo's..." 
            onChange={e=>{
                setInputText(e.target.value);
            }}onKeyDown={handleEnterPress} />
            <button className='add-btn' onClick={
                ()=>{
                    props.addList(inputText)
                    setInputText('')
                }
            }>+</button>
            
        </div>
    )
}

export default TodoInput
