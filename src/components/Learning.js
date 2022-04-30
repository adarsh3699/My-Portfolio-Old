import React, { useState } from 'react';

// class Learning extends React.Component {}
function Learning() {
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState([{text: "one", isDone: false}]); //{element: "one", isDone: true}

    
    function handleTextChange(e) {
        const value = e.target.value;
        setText(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        //when enter is pressed new to do is created
        setToDos([ ...toDos, {text, isDone: false} ]);
        setText("");
    }

    function handleCheckboxClick(index, isDone) {
        const newToDos = toDos.map(function(toDo, i) {
            return (i === index ? { ...toDo, isDone: !isDone } : toDo)
        })

        setToDos(newToDos);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleTextChange} value={text}/>
            </form>
            

            {
                toDos.map(function(toDo, index) {
                    return (
                        <div key={index}>
                            <input type="checkbox" checked={toDo.isDone} onChange={() => handleCheckboxClick(index, toDo.isDone)} />
                            <span>{toDo.text}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Learning;