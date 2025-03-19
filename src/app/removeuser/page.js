"use client";
import { removeUser } from "@/redux/slice";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const userData = useSelector((data) => data.userData.users);
  const dispatch = useDispatch();
  console.log(userData);
  return (
    <div>
      <h1>Remove Users</h1>
      {userData.map((item) => {
        return <div className="user-item">
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeUser(item.id))}>
            Remove User
          </button>
        </div>;
      })}
    </div>
  );
}
