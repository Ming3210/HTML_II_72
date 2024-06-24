import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { randomNumber } from "../store/reducers/listNumber";

export default function B2() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <div>
      <p>[{state.listNumber.join(",")}]</p>
      <button onClick={() => dispatch(randomNumber())}>
        Random generate number
      </button>
    </div>
  );
}
