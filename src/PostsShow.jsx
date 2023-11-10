import axios from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then((response) => {
      console.log(response);
      event.target.reset();
    });
  };
  console.log(props);
  return (
    <div>
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
