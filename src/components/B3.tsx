import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUIReducer } from "../store/reducers/darkMode";
import { useSelector } from "react-redux";

export default function B3() {
  const state: any = useSelector((state: any) => state);
  console.log(state);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>B3</h1>
      {state.changeUI ? (
        <div
          style={{ width: "100%", height: "50px", backgroundColor: "white" }}
        >
          <button onClick={() => dispatch(changeUIReducer())}>Dark mode</button>
        </div>
      ) : (
        <div
          style={{ width: "100%", height: "50px", backgroundColor: "black" }}
        >
          <button onClick={() => dispatch(changeUIReducer())}>
            White mode
          </button>
        </div>
      )}
    </div>
  );
}
