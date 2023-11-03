function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
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

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} alt="logos" />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "Blog Post 1",
      body: "This is the first post",
      image: "https://1000logos.net/wp-content/uploads/2016/11/google_logo.png",
    },
    {
      id: 2,
      title: "Blog Post 2",
      body: "This is the second post",
      image:
        "data:image/png;base64,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",
    },
    {
      id: 3,
      title: "Blog Post 3",
      body: "This is the third post",
      image: "https://1000logos.net/wp-content/uploads/2020/04/Radiohead-Logo.png",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
