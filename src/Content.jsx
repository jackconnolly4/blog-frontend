import { useState } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import axios from "axios";

export function Content() {
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load Posts</button>
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
