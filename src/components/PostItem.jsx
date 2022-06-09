import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const { title, body, id } = props.post;
  const router = useNavigate();
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {id}. {title}
          </strong>
          <div>{body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => router(`/posts/${id}`)}>Open</MyButton>
          <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
