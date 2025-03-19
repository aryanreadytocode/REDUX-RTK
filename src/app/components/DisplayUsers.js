"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "@/redux/slice";

export default function DisplayUsers() {
  const userData = useSelector((data) => data.userData.users);
  console.log(userData)
  const dispatch = useDispatch((data) => {data.users})
  return (
    <div className="display-users">
      <h2>User List</h2>
      {userData.map((item) => {
        return <div className="user-item">
            <span>{item.name}</span>
            <button onClick={()=> dispatch(removeUser(item.id))}>remove</button>
        </div>;
      })}
    </div>
  );
}
