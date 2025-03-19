"use client"
import { addUser } from "@/redux/slice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddUsers() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const userDispatch= () => {
        dispatch(addUser(name))
    }
    
    return <div className="add-users">
        <h2>Add List</h2>
        <input onChange= {(e)=> setName(e.target.value)} className="add-user-input" type="text" placeholder="add new user"/>
        <button onClick= {userDispatch} className="add-user-btn">Add User</button>
        <Link href="/removeuser">Remove User</Link>
        <Link style={{marginLeft:10}} href="/todolist">Goto todo page</Link>
        <Link style={{marginLeft:10}} href="/apiusers">Goto API users page</Link>

    </div>
}