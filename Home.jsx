import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
const Home = () => {
    // const value=0;
    const value1=0;
    const dispatch=useDispatch();
    const value=useSelector((state)=>state.custom.c)
    const addBtn=()=>{
        dispatch({
            type:"increment",
        });
    };
    const suBtn=()=>{
        dispatch({
            type:"decrement",
        });
    };
    const addValBtn=()=>{
        dispatch({
            type:"incrementByValue",
            payload:25,
        });
    };
  return (
    <div>
        <p>{value}</p>
        <button onClick={addBtn}>Increment</button>
        <button onClick={suBtn}>Decrement</button>
        <button onClick={addValBtn}>Increment by {value1}</button>
    </div>
  )
}

export default Home