export function PostsShow(props) {
  console.log(props);
  return (
    <div>
      <h2>Title: {props.post.title}</h2>
      <p>body: {props.post.body}</p>
      <img src={props.post.image} />
      <p>Created at: {props.post.created_at}</p>
    </div>
  );
}
