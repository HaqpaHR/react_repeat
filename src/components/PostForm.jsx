import React, { useState } from "react";
import MyInput from "./UI/input/MyInput.";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [item, setItem] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...item,
      id: Date.now(),
    };
    create(newPost);
    setItem({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        onChange={(e) => setItem({ ...item, title: e.target.value })}
        value={item.title}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        onChange={(e) => setItem({ ...item, body: e.target.value })}
        value={item.body}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
