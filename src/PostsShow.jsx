export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };
  console.log(props);
  return (
    <div>
      <h1>Title: {props.post.title}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            Title: <input defaultValue={props.post.title} name="title" type="text" />
          </div>
          <div>
            Body: <input defaultValue={props.post.body} name="body" type="text" />
          </div>
          <div>
            Image URL: <input defaultValue={props.post.image} name="image_url" type="text" />
          </div>
          <button type="submit">Update Post</button>
        </div>
      </form>
    </div>
  );
}
