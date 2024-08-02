import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const MyProfileRoute = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState(window.localStorage.getItem("appUserId") || "");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${userId}`, { withCredentials: true })
            .then((res) => {
            navigate(`/profile/${userId}`)
            })
            .catch((err) => console.log(err));
    }, []);
}