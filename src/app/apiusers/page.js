"use client"
import { fetchApiUsers } from "@/redux/slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function Page() {
    const dispatch = useDispatch();
    const apiUserData = useSelector(data => data.userData.userAPIData)
    useEffect(()=> {
        dispatch(fetchApiUsers())
    }, [])
    return(
        <div>
            <h1>User list from API</h1>
            {
                
                apiUserData.map((item) => {
                    return <h5>{item.name}</h5>
                })
            }
        </div>
    )
}