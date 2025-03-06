import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Fetch the data
export const fetchPosts = () => {
  return api.get("/posts");
};

// export const fetchPosts = async () => {
//     const res = await api.get("/posts");
//     return res.status === 200 ? res.data : [];
// }

// Fech individual post
export const fetchIndividualPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

// Pagination
export const fetchThreePosts = async (pageNumber) => {
  try {
    const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

// Mutation function to delete the post
export const deletePost = async (id) => {
  const res = await api.delete(`/posts/${id}`);
  return res;
};