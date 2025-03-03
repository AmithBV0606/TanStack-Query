import React from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

// Fetch the data 
export const fetchPosts = () => {
    return api.get("/posts");
}

// export const fetchPosts = async () => {
//     const res = await api.get("/posts");
//     return res.status === 200 ? res.data : [];
// }