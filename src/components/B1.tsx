import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrease, increase, reset } from "../store/reducers/countReducer";

export default function Count() {
  const state: any = useSelector((state) => state);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>B1</h1>
      <p>Giá trị count {state.countReducer}</p>
      <button onClick={() => dispatch(increase())}>Tăng</button>
      <button onClick={() => dispatch(decrease())}>Giảm</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
