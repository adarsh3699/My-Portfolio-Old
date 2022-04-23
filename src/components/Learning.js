import React, { useReducer, useState } from 'react';
import Bhemu from "./Bhemu";

// class Learning extends React.Component {}
function Learning() {
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState([{text: "one", isDone: false}]); //{element: "one", isDone: true}

    // const [myName, setMyName] = useState("Adarsh");
    // let myName = "Adarsh";
    // functon setMyName(value) {
    //     myName = value;
    // }
    
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
            <div id="asd">hello bhemus</div>
            <br />

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
            <br />
            {/* <div onClick={ () => handleAddBtnClick()}>
                addBtn
            </div> */}

            {/* <div>myName (state): {myName}</div>
            <div>myName2 (normal variable): {myName2}</div>
            <button onClick={handleBtnClick}>click me</button>

            <Bhemu
                name={myName}
                type={"biy"}
            /> */}
        </>
    )
}

export default Learning;