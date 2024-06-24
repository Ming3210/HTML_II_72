import { LeftOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import resizeReducer, { resize } from "../store/reducers/resizeReducer";

export default function B5() {
  const state: any = useSelector((state: any) => state);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>B5</h1>
      {state.resizeReducer ? (
        <div style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
          <div
            style={{
              width: 200,
              backgroundColor: "#007BFF",
              display: "flex",
              flexDirection: "column",
              paddingTop: 20,
            }}
          >
            <div
              style={{
                padding: 15,
                color: "white",
                cursor: "pointer",
                textAlign: "start",
              }}
            >
              <UserOutlined />
              Bảng điều khiển
            </div>
            <div
              style={{
                padding: 15,
                color: "white",
                cursor: "pointer",
                textAlign: "start",
              }}
            >
              <UserOutlined />
              Tài khoản
            </div>
            <div
              style={{
                padding: 15,
                color: "white",
                cursor: "pointer",
                textAlign: "start",
              }}
            >
              <UserOutlined />
              Tài sản
            </div>
            <div
              style={{
                padding: 15,
                color: "white",
                cursor: "pointer",
                textAlign: "start",
              }}
            >
              <UserOutlined />
              Thống kê
            </div>
            <div
              style={{
                padding: 15,
                color: "white",
                cursor: "pointer",
                textAlign: "start",
              }}
            >
              <UserOutlined />
              Tài liệu
            </div>
            <div
              style={{
                padding: 15,
                color: "white",
                cursor: "pointer",
                textAlign: "start",
                marginTop: "auto",
              }}
            >
              <LeftOutlined onClick={() => dispatch(resize())} />
              Thu gọn
            </div>
          </div>
        </div>
      ) : (
        <div style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
          <div
            style={{
              width: "50px",
              backgroundColor: "#007BFF",
              display: "flex",
              flexDirection: "column",
              paddingTop: 20,
            }}
          >
            <div
              style={{
                padding: 15,

                cursor: "pointer",
              }}
            >
              <UserOutlined />
            </div>
            <div
              style={{
                padding: 15,
                cursor: "pointer",
              }}
            >
              <UserOutlined />
            </div>
            <div
              style={{
                padding: 15,
                cursor: "pointer",
              }}
            >
              <UserOutlined />
            </div>
            <div
              style={{
                padding: 15,
                cursor: "pointer",
              }}
            >
              <UserOutlined />
            </div>
            <div
              style={{
                padding: 15,
                cursor: "pointer",
              }}
            >
              <UserOutlined />
            </div>
            <div
              onClick={() => dispatch(resize())}
              style={{
                padding: 15,
                cursor: "pointer",
                marginTop: "auto",
              }}
            >
              <LeftOutlined />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
