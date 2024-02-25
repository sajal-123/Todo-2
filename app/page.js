"use client";
import React, { useState } from "react";

function page() {
  const [task, newtask] = useState("");
  const [desc, newdesk] = useState("");
  const [setTask, newsetTask] = useState([]);
  let submit = (e) => {
    //  Submit karne par page ko reload Krne se rok dega
    e.preventDefault();
    console.log(task);
    console.log(desc);
    //   ...set Task -> taki poorane me hi add hota rahe
    newsetTask([...setTask, { task, desc }]);
    newtask("");
    newdesk("");
    //  console.log(setTask)
  };
  const deletehandle = (i) => {
    var after = [...setTask];
    after.splice(i, 1);
    newsetTask(after);
  };
  let rendertask = <h1>No task yet</h1>;
  // e-> elelmnt ka naam and i-> index
  if (setTask.length > 0) {
    //  Map is used for array to assign value one by one
    rendertask = setTask.map((e, i) => {
      return (
        <>
          <li key={i} className="flex  justify-between text-center mb-8">
            <div className="flex text-center justify-between mb-4 w-2/3">
              <h5 className="font-semibold text-2xl">{e.task}</h5>
              <h2 className="font-semibold text-xl">{e.desc}</h2>
            </div>
            <button
              onClick={() => {
                deletehandle(i);
              }}
              className="bg-red-400 text-white py-4 px-2"
            >
              delete
            </button>
          </li>
        </>
      );
    });
  }
  return (
    <>
      <div>
        <h1 className="bg-lime-500 font-bold text-center min-h-10 justify-center py-0.5">
          This is my Todolist
        </h1>
        <form onSubmit={submit} className="flex text-center">
          <li className="list-none m-5">
            <label htmlFor="task">Task: </label>
            <input
              value={task}
              onChange={(e) => {
                // console.log(e);
                newtask(e.target.value);
              }}
              id="task"
              type="text"
              placeholder="Enter your Task"
              className="border-4 border-zinc-900"
            />
          </li>
          <li className="list-none m-5">
            <label htmlFor="Desc">description: </label>
            <input
              value={desc}
              onChange={(e) => {
                // console.log(e);
                newdesk(e.target.value);
              }}
              id="Desc"
              type="text"
              placeholder="Description to describe"
              className="border-4 border-zinc-900"
            />
          </li>
          <li className="list-none">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 font-bold m-5">
              Add to List
            </button>
          </li>
        </form>
        <hr />
        <div className="data p-8 bg-slate-400 m-5">
          <li className="list-none">{rendertask}</li>
        </div>
      </div>
    </>
  );
}

export default page;
