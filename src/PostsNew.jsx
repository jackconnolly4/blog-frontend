export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <div>
        Title: <input type="text" />
        Body: <input type="text" />
        Image: <input type="text" />
      </div>
      <div>
        <button type="submit">Create the Blog Post</button>
      </div>
    </div>
  );
}
