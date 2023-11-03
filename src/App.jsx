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

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div>
        <h2>Blog Post 1</h2>
        <div>
          <img src="https://1000logos.net/wp-content/uploads/2016/11/google_logo.png" alt="googl logo" />
        </div>
        <p>This is the first post</p>
      </div>
      <div>
        <h2>Blog Post 2</h2>
        <div>
          <img
            src="https://static.wikia.nocookie.net/ween/images/d/d1/Kisspng-ween-tabernacle-concert-boognish-logo-wolves-and-moose-on-isle-royale-5b3bad7b1d6e06.4733215815306376911206.png/revision/latest?cb=20190410165641"
            alt="boognish"
          />
        </div>
        <p>This is the second post</p>
      </div>
      <div>
        <h2>Blog Post 3</h2>
        <div>
          <img
            src="radihttps://static.wikia.nocookie.net/logopedia/images/6/6f/Radioheadmodifiedbear.svg/revision/latest?cb=20210529183052ohead.com"
            alt="radiohead logo"
          />
        </div>
        <p>This is the third post</p>
      </div>
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
  return (
    <div>
      <PostsNew />
      <PostsIndex />
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
