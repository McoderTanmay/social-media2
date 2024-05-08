import React, { useState } from "react";
import "../Home/Homepage.css";
import Post from "./Posts";
import { baseUrl, postRequest } from "../../utils/services";

const Homepage = ({ posts, data }) => {
  const handelLike = async(postId) =>{
    console.log("1",data?._id);
    const id = {
      "_id":data._id
    }
    // console.log(postId);
    const like = await postRequest(`${baseUrl}post/like-post/${postId}`,id
  );
    // console.log(like);
  }
  return (
    <main className="homepage">
      {posts &&
        posts.map((post) => (
          <Post
            handelLike={handelLike}
            id = {post?.postedBy}
            postId={post?._id}
            key={post?._id}
            content={post?.content}
            image={post?.image}
            likes={post?.likes}
          ></Post>
        ))}
    </main>
  );
};

export default Homepage;
