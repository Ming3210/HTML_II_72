import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/reducers/favoriteReducer";
import {
  StarOutlined,
  StarFilled,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";

export default function B7() {
  const accounts = useSelector((state: any) => state.favoriteReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {accounts.map((item: any) => (
          <li key={item.id}>
            {item.name}
            <div onClick={() => dispatch(toggleFavorite(item.id))}>
              {item.isFavorite ? <HeartOutlined /> : <HeartFilled />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
