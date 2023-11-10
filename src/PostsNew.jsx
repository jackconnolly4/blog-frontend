export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handle submit", params);
    props.onCreatePost(params);
    event.target.reset();
  };
  // .catch((error) => {
  //   console.log(error.response.data.errors);
  // });

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
          Body: <input name="body" type="text" />
          Image: <input name="image" type="text" />
        </div>
        <div>
          <button type="submit">Create the Blog Post</button>
        </div>
      </form>
    </div>
  );
}
