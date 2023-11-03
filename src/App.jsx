function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

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

      <div id="posts-index">
        <h1>All posts</h1>
      </div>

      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

export default App;
