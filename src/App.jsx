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
        "https://static.wikia.nocookie.net/ween/images/d/d1/Kisspng-ween-tabernacle-concert-boognish-logo-wolves-and-moose-on-isle-royale-5b3bad7b1d6e06.4733215815306376911206.png/revision/latest?cb=20190410165641",
    },
    {
      id: 3,
      title: "Blog Post 3",
      body: "This is the third post",
      image:
        "https://static.wikia.nocookie.net/logopedia/images/6/6f/Radioheadmodifiedbear.svg/revision/latest?cb=20210529183052ohead.com",
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
