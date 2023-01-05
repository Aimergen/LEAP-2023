import { useState } from "react";

const styles={
    wrapper: {
        minHeight: '100vh',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
};
export default function State(){
    const[todos, setTodos]=useState([]);
    const[input, setInput]=useState('');

    const addTodo =()=>{
        const newList=[...todos, input];
        setTodos(newList);
        setInput('');
    };
    const clearTodo=(e)=>{
        console.log(e.target.textContent);
        const add=e.target.textContent;
        const arr=todos.filter((todo)=>{
            return todo !== add;
        });
        setTodos(arr);


        // console.log(e.target.id);
        // const clearList=[input];
        // setInput(clearList);
        
    }
    return (
        <div style={styles.wrapper}>
            <input value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index)=>(
                    <li key={index} onClick={clearTodo}>{todo}</li>
                ))}
            </ul>
        </div>
        
    );
}