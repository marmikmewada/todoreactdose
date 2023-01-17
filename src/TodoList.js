import React from "react";
import "./TodoList.css";
import { useState } from "react";
const TodoList = () => {
  const [activity, setactivity] = useState("");
  const [list, setlist] = useState([]);
  // console.log(activity);
  const addActivity = () => {
    // setlist([...list, activity]);
    // console.log(list);

    setlist((list) => {
      const updatedlist = [...list, activity];
      setactivity("");
      console.log(updatedlist);
      return updatedlist;
    });
  };

  const removeActivity = (index) => {
    const updatedlistdata = list.filter((val,id)=>{
        return index!==id;
    })
    console.log(updatedlistdata);
    // setlist(updatedlistdata);
  }
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>To Do List</h1>
        </div>
        <div className="inputarea">
          <input
            type="text"
            placeholder="Add Activity"
            value={activity}
            onChange={(e) => {
              setactivity(e.target.value);
            }}
          />
          <button onClick={addActivity}>Add</button>
        </div>
        <p className="listheading">here is your list :{")"}</p>
        <div className="listarea">
            {list!==[] && list.map((value,index)=>{
                return(
                    <>
                    <div className="listvalue" key={index}>
                        <p key={index}>{value}</p><button onClick={removeActivity(index)}>Delete</button>
                    </div>
                    </>
                )
            })}
        </div>
      </div>
    </>
  );
};

export default TodoList;
