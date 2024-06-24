import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggle } from "../store/reducers/displayReducer";

export default function B4() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>B4</h1>
        <button onClick={() => dispatch(toggle())}>Change Display</button>
        {state.displayReducer ? (
          <div>
            <p
              style={{
                width: "20%",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              1
            </p>
            <p
              style={{
                width: "20%",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              2
            </p>
            <p
              style={{
                width: "20%",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              3
            </p>
            <p
              style={{
                width: "20%",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              4
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "10px" }}>
            <p
              style={{
                width: "20%",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              1
            </p>
            <p
              style={{
                width: "20%",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              2
            </p>
            <p
              style={{
                width: "20%",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              3
            </p>
            <p
              style={{
                width: "20%",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              4
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
