import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);
  return (
    <div id="posts-index">
      <form className="d-flex" role="search">
        Search filter:{" "}
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <h1>All posts</h1>
      {props.posts
        .filter((post) => post.body.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <img src={post.image} alt="logos" />
            <p>{post.body}</p>
            <button onClick={() => props.onShowPost(post)}>More info!</button>
          </div>
        ))}
    </div>
  );
}
