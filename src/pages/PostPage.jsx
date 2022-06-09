import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetch(async () => {
    const res = await PostService.getById(params.id);
    setPost(res.data);
  });

  const [fetchComments, isComLoading, comError] = useFetch(async () => {
    const res = await PostService.getCommentsById(params.id);
      setComments(res.data);
  });

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div>
      <h1>вы открыли страницу поста c ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Comments:</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((com) => (
            <div key={com.id} style={{marginTop: '10px'}}>
              <h5>{com.email}</h5>
              <p>{com.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostPage;
