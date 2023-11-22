import './App.css';
import AddPostForm from './components/posts/AddPostForm';
import PostsList from './components/posts/PostsList';

function App() {
  return (
    <div className="App">
      <h1>My Blog</h1>
      <AddPostForm/>
      <PostsList/>
    </div>
  );
}

export default App;
